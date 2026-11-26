# Edge TTS wrapper: python3 tts.py <voice> <rate> <text> <out.mp3>. TTS_CA_BUNDLE=<pem> for TLS-intercepting proxies.
import sys, ssl, os, asyncio
import edge_tts, edge_tts.communicate as c
ca = os.environ.get("TTS_CA_BUNDLE")
if ca: c._SSL_CTX = ssl.create_default_context(cafile=ca)
voice, rate, text, out = sys.argv[1:5]
asyncio.run(edge_tts.Communicate(text, voice, rate=rate).save(out))
