#!/bin/bash
# Temporary diagnostic: parallel asset fetches, capture 503 bodies and headers.
for o in https://spanishcue.com https://spanishcue-staging.agnremote.workers.dev; do
 echo "=== $o"
 curl -s -o /tmp/p.html "$o/lp/google-teachers?r=$RANDOM"
 grep -o '/assets/[A-Za-z0-9_.-]*\.js' /tmp/p.html | sort -u > /tmp/list
 echo "assets: $(wc -l < /tmp/list)"
 mkdir -p /tmp/out; rm -f /tmp/out/*
 i=0
 while read a; do i=$((i+1)); (curl -s -D /tmp/out/$i.h -o /tmp/out/$i.b -w "$a %{http_code} %{time_total}s\n" "$o$a" > /tmp/out/$i.s) & done < /tmp/list
 wait
 cat /tmp/out/*.s | sort -k2 | awk '{print $2}' | sort | uniq -c
 for s in /tmp/out/*.s; do n=${s%.s}; if ! grep -q ' 200 ' $s; then cat $s; tr -d '\r' < $n.h | grep -iE '^(HTTP|server|cf-ray|cf-cache|content-type|x-spanishcue|retry)' ; head -c 400 $n.b; echo; echo ---; fi; done | head -80
 sort -t' ' -k3 -n /tmp/out/*.s 2>/dev/null | tail -3
done
