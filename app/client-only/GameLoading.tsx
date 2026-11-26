// What a PRO 3D class shows while its game loads in the browser (and what the
// server renders for it). The games run only in the browser: their code and
// level data stay out of the Worker bundle (build/ssr-client-only-plugin.ts).
// Anonymous visitors and crawlers never reach these routes (the Worker sends
// them to /acceso), so no public HTML changes.
export default function GameLoading({ title }: { title: string }) {
  return (
    <div role="status" aria-live="polite" style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24, background: '#0d1117', color: '#f4efe6', textAlign: 'center', fontFamily: 'system-ui, -apple-system, Segoe UI, sans-serif' }}>
      <div>
        <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700 }}>{title}</p>
        <p style={{ margin: '8px 0 0', opacity: 0.75 }}>Abriendo la clase…</p>
      </div>
    </div>
  );
}
