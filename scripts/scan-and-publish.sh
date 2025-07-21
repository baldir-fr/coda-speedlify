#!/bin/bash
echo "Scan and publish Speedlify"
npm run test-pages
git add .
git commit -m "Automatic Scan and publish $(date)"
git push --force
