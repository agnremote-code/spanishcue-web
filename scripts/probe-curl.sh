#!/bin/bash
# Temporary diagnostic: which build each request variant receives.
o=https://spanishcue.com
for q in "" "?utm_source=chatgpt.com"; do
 for lang in "" "es-ES,es;q=0.9"; do
  for ua in "curl/8" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36"; do
   curl -s -D /tmp/h -o /tmp/p.html -A "$ua" ${lang:+-H "Accept-Language: $lang"} -w "%{http_code} %{time_total}s " "$o/lp/google-teachers$q"
   echo "q=[$q] lang=[$lang] ua=[${ua:0:10}] analytics=$(grep -o 'analytics-[A-Za-z0-9_-]*\.js' /tmp/p.html | head -1) landing=$(grep -o 'GoogleTeachersLanding-[A-Za-z0-9_-]*\.js' /tmp/p.html | head -1) $(grep -i 'cf-cache-status\|x-spanishcue-cache\|^age' /tmp/h | tr -d '\r' | tr '\n' ' ')"
  done
 done
done
for a in analytics-DvPNF3Jh.js analytics-Jo8MU0rQ.js GoogleTeachersLanding-B0NpuC5u.js GoogleTeachersLanding-DlTWQOTW.js; do
 curl -s -D /tmp/h -o /dev/null -w "$a %{http_code} %{time_total}s " "$o/assets/$a"; grep -i 'cf-cache-status\|content-type' /tmp/h | tr -d '\r' | tr '\n' ' '; echo
done
