if [ -z "$(git status --porcelain)" ]; then 
    # Working directory clean
    npm version patch
    npm publish
# else 
#   Uncommitted changes
fi