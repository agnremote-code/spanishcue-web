import type { Metadata } from 'next';
import BrandKit from './BrandKit';
import './style.css';

export const metadata: Metadata = {
  title: 'SPANISHCUE · Marketing & Brand Kit',
  description: 'Official SpanishCue logos, mascot, public screenshots, features, pricing and advertising assets.',
  alternates: { canonical: 'https://spanishcue.com/zeely' },
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
};

export default function ZeelyPage() {
  return <main className="zeely-kit">
    <header><a href="https://spanishcue.com/">SPANISHCUE</a><span>Brand kit · October 2026</span><h1>Choose. Open. Teach.</h1><p>Official commercial material for creative partners and website analyzers.</p></header>
    <BrandKit />
  </main>;
}
