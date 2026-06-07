#!/usr/bin/env python3
"""Validate the Claude skill folders in this repository.

For every directory that contains a SKILL.md, this checks:
  - YAML frontmatter is present (delimited by --- ... ---)
  - `name` is present and matches ^[a-z0-9-]+$
  - `description` is present and is <= 1024 characters (the skill limit)
  - every `references/<file>.md` mentioned in SKILL.md actually exists
  - evals/evals.json, if present, is valid JSON with an `evals` array

Dependency-free (no PyYAML) so it runs identically in CI and locally.
Exits non-zero if any skill fails a check.
"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MAX_DESC = 1024
NAME_RE = re.compile(r"^[a-z0-9-]+$")


def find_skill_dirs(root):
    found = []
    for dirpath, dirnames, filenames in os.walk(root):
        # don't descend into VCS or CI internals
        dirnames[:] = [d for d in dirnames if d not in (".git", ".github", "__pycache__")]
        if "SKILL.md" in filenames:
            found.append(dirpath)
    return sorted(found)


def extract_frontmatter(text):
    """Return the text between the leading --- and the next --- line, or None."""
    if not re.match(r"^---\s*\n", text):
        return None
    m = re.search(r"\n---\s*(?:\n|$)", text)
    if not m:
        return None
    return text[text.index("\n") + 1 : m.start()]


def get_field(fm, key):
    """Read a scalar or block-scalar (|) value for `key` from frontmatter text."""
    block = re.search(
        rf"^{key}:[ \t]*\|[ \t]*\n(.*?)(?=^[^ \t#]|\Z)", fm, re.M | re.S
    )
    if block:
        lines = []
        for line in block.group(1).splitlines():
            if not line.strip():
                lines.append("")
            elif line.startswith("  "):
                lines.append(line[2:])
            else:
                lines.append(line)
        return "\n".join(lines).strip()
    inline = re.search(rf"^{key}:[ \t]*(.+?)[ \t]*$", fm, re.M)
    if inline:
        return inline.group(1).strip().strip("\"'")
    return None


def validate_skill(skill_dir):
    rel = os.path.relpath(skill_dir, ROOT)
    errors = []
    with open(os.path.join(skill_dir, "SKILL.md"), encoding="utf-8") as f:
        text = f.read()

    fm = extract_frontmatter(text)
    if fm is None:
        return [f"{rel}: SKILL.md has no parseable YAML frontmatter"]

    name = get_field(fm, "name")
    if not name:
        errors.append(f"{rel}: frontmatter is missing 'name'")
    elif not NAME_RE.match(name):
        errors.append(f"{rel}: name '{name}' must match ^[a-z0-9-]+$")

    desc = get_field(fm, "description")
    if not desc:
        errors.append(f"{rel}: frontmatter is missing 'description'")
    elif len(desc) > MAX_DESC:
        errors.append(
            f"{rel}: description is {len(desc)} chars (max {MAX_DESC})"
        )

    for ref in sorted(set(re.findall(r"references/[\w./-]+\.md", text))):
        if not os.path.isfile(os.path.join(skill_dir, ref)):
            errors.append(f"{rel}: SKILL.md points to '{ref}' which does not exist")

    evals_path = os.path.join(skill_dir, "evals", "evals.json")
    if os.path.isfile(evals_path):
        try:
            with open(evals_path, encoding="utf-8") as f:
                data = json.load(f)
            if not isinstance(data.get("evals"), list):
                errors.append(f"{rel}: evals.json has no 'evals' array")
        except json.JSONDecodeError as exc:
            errors.append(f"{rel}: evals.json is invalid JSON ({exc})")

    return errors


def main():
    skill_dirs = find_skill_dirs(ROOT)
    if not skill_dirs:
        print("No SKILL.md files found in the repository.")
        return 1

    all_errors = []
    for skill_dir in skill_dirs:
        errors = validate_skill(skill_dir)
        rel = os.path.relpath(skill_dir, ROOT)
        if errors:
            all_errors.extend(errors)
            print(f"FAIL  {rel}")
            for err in errors:
                print(f"      - {err}")
        else:
            print(f"OK    {rel}")

    print()
    if all_errors:
        print(f"{len(all_errors)} problem(s) across {len(skill_dirs)} skill(s).")
        return 1
    print(f"All {len(skill_dirs)} skill(s) valid.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
