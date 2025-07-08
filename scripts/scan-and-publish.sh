echo "Scan and publish Speedlify"
npm run test-pages
git commit -a -m "Automatic Scan and publish $(date)"
git push --force