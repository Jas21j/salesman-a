#!/bin/bash
# Run this from the parent folder (skills) to remove everything except salesman-a.
# Usage: from Desktop/skills, run: bash salesman-a/cleanup-outside-website.sh

set -e
SKILLS_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$SKILLS_ROOT"

echo "Cleaning everything outside salesman-a in: $SKILLS_ROOT"

[ -d "salesman-solutions" ] && rm -rf "salesman-solutions" && echo "Removed salesman-solutions"
[ -d "skills" ]             && rm -rf "skills"             && echo "Removed skills/"
[ -d "template" ]          && rm -rf "template"           && echo "Removed template/"
[ -d "spec" ]               && rm -rf "spec"              && echo "Removed spec/"
[ -d ".cursor" ]            && rm -rf ".cursor"           && echo "Removed .cursor/"

[ -f "package-lock.json" ]   && rm -f "package-lock.json"  && echo "Removed root package-lock.json"
[ -f "package.json" ]       && rm -f "package.json"       && echo "Removed root package.json"
[ -f "README.md" ]          && rm -f "README.md"          && echo "Removed root README.md"

echo "Done. Remaining:"
ls -la
