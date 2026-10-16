#!/bin/bash
# Temporary diagnostic: response times for production and staging pages and assets.
for origin in https://spanishcue.com https://spanishcue-staging.agnremote.workers.dev; do
  echo "== $origin"
  for i in 1 2 3; do curl -s -o /tmp/p.html -w "html %{http_code} %{time_total}s\n" "$origin/lp/google-teachers"; done
  assets=$(grep -o '/assets/[^"]*\.js' /tmp/p.html | sort -u | head -20)
  a1=$(echo "$assets" | head -1)
  for i in 1 2 3; do curl -s -o /dev/null -w "one-asset %{http_code} %{time_total}s\n" "$origin$a1"; done
  for a in $assets; do curl -s -o /dev/null -w "parallel %{http_code} %{time_total}s $a\n" "$origin$a" & done; wait
  curl -s -o /dev/null -w "webp %{http_code} %{time_total}s\n" "$origin/lp/demos/grammar.webp"
  curl -sI "$origin$a1" | grep -i "cf-ray\|server\|cache\|x-spanish" 
done
