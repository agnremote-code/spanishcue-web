import kit from '../../public/brand/ads/manifest.json';

// Marketing-only allowlist. Never import lesson bodies or account/server data here.
export default function BrandKit() {
  return <>
    <h2>SPANISHCUE · Marketing &amp; brand assets</h2>
    <p>{kit.brand.description}</p><p lang="es">{kit.brand.descriptionEs}</p>
    <p>{kit.brand.tagline} · CEFR A1–C2 · Grammar, conversation, listening, pronunciation and vocabulary.</p>
    <h3>Who it is for</h3><ul>{kit.brand.audience.map(item => <li key={item}>{item}</li>)}</ul>
    <h3>Features / Funciones</h3><ul>{kit.features.map(item => <li key={item.en}>{item.en}<br /><span lang="es">{item.es}</span></li>)}</ul>
    <h3>Pricing / Precios</h3>
    <p>Founder monthly plan: US$15.50/month, tax included, paid by card. Automatically renews until cancelled.</p>
    <p>Optional paid trial by card: US$2 for 1 day, then US$15.50/month until cancelled. This is a paid trial.</p>
    <p>Free account: 10 complete sample lessons, no card required. Founder offer: first 1,000 eligible subscriptions.</p>
    <p lang="es">Plan mensual fundador: US$15.50/mes con impuestos incluidos, con tarjeta. Prueba paga opcional: US$2 por 1 día y después US$15.50/mes hasta cancelar.</p>
    <a href={kit.pricing.source}>Current plans and subscription terms</a>
    <h3>Ad headlines / Textos para anuncios</h3>
    {kit.copy.map(item => <p key={item.en}><strong>{item.en}</strong><br /><span lang="es">{item.es}</span></p>)}
    <h3>Calls to action</h3><ul>{kit.ctas.map(item => <li key={item.url}><a href={item.url}>{item.en} / {item.es}</a></li>)}</ul>
    <h3>Free lesson examples</h3><ul>{kit.examples.map(item => <li key={item.title}><a href={item.url}>{item.title}</a> · {item.level} · {item.category}<p>{item.description}</p></li>)}</ul>
    <h3>Logos, mascot, screenshots and ad creatives</h3>
    <div className="zeely-assets">{kit.assets.map(asset => <figure key={asset.path}>
      <a href={`${kit.origin}${asset.path}`}><img src={`${kit.origin}${asset.path}`} alt={asset.title} loading="lazy" width="600" height="400" /></a>
      <figcaption>{asset.title} · {asset.kind}<br /><a href={`${kit.origin}${asset.path}`}>Open original asset</a></figcaption>
    </figure>)}</div>
    <h3>Brand guidance</h3><ul>{kit.usage.map(item => <li key={item}>{item}</li>)}</ul>
    <a href="https://spanishcue.com/brand/ads/manifest.json">Complete machine-readable marketing manifest</a>
  </>;
}
