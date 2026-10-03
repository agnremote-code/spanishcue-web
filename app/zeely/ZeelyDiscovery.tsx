import kit from '../../public/brand/ads/manifest.json';
import BrandKit from './BrandKit';

export default function ZeelyDiscovery() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${kit.origin}/#organization`,
    name: kit.brand.name,
    url: kit.origin,
    description: kit.brand.description,
    slogan: kit.brand.tagline,
    logo: `${kit.origin}/brand/ads/spanishcue-logo-light.svg`,
    image: kit.assets.map(asset => `${kit.origin}${asset.path}`),
    subjectOf: { '@type': 'WebPage', url: kit.kitUrl, name: 'SPANISHCUE marketing and brand kit' },
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    {/* Present in the initial HTML for URL-based scrapers, absent from the visual and accessibility trees. */}
    <section id="spanishcue-marketing-assets" hidden aria-hidden="true" style={{ display: 'none' }}>
      <a href="https://spanishcue.com/zeely">SpanishCue marketing, logos, images and brand kit for Zeely</a>
      <BrandKit />
    </section>
  </>;
}
