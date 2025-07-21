#!/bin/bash
echo "Scan and publish Speedlify"
git reset --hard
nvm use --lts
npm run test-pages
git add .
git commit -m "Automatic Scan and publish $(date)"
git push --force
