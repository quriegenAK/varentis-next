#!/usr/bin/env bash
set -e
cd "$(git rev-parse --show-toplevel)"

echo "=== 1. Setting local git config for this repo ==="
git config user.name "Ash Khan"
git config user.email "ashkhan4428@gmail.com"
echo "   user.name  = $(git config user.name)"
echo "   user.email = $(git config user.email)"
echo ""

echo "=== 2. Rewriting history (Ash.Khan@csaa.com -> ashkhan4428@gmail.com, name -> Ash Khan) ==="
if command -v git-filter-repo &>/dev/null; then
  # Use mailmap: "New Name <new@email> Old Name <old@email>"
  MAILMAP=$(mktemp)
  echo "Ash Khan <ashkhan4428@gmail.com> <Ash.Khan@csaa.com>" > "$MAILMAP"
  git filter-repo --mailmap "$MAILMAP" --force
  rm -f "$MAILMAP"
else
  git filter-branch -f --env-filter '
    if [ "$GIT_COMMITTER_EMAIL" = "Ash.Khan@csaa.com" ]; then
      export GIT_COMMITTER_EMAIL="ashkhan4428@gmail.com"
      export GIT_COMMITTER_NAME="Ash Khan"
    fi
    if [ "$GIT_AUTHOR_EMAIL" = "Ash.Khan@csaa.com" ]; then
      export GIT_AUTHOR_EMAIL="ashkhan4428@gmail.com"
      export GIT_AUTHOR_NAME="Ash Khan"
    fi
  ' --tag-name-filter cat -- --all
fi
echo ""

echo "=== 3. Verifying (git log -5 --format) ==="
git log -5 --format="%h %ae %an %s"
echo ""

echo "=== 4. Check for any remaining old email ==="
if git log --all --format="%ae" | grep -q "Ash.Khan@csaa.com"; then
  echo "   WARNING: Some commits still show Ash.Khan@csaa.com"
  git log --all --oneline --format="%h %ae %an" | grep "Ash.Khan@csaa.com" || true
else
  echo "   OK: No commits with Ash.Khan@csaa.com found."
fi
echo ""
echo "Done. If you already pushed this repo, run: git push --force --all && git push --force --tags"
echo ""
