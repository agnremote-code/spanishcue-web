import type { Metadata } from 'next';
import { canonicalUrl } from '../seo';
import { socialPreviewImage, socialPreviewUrl } from '../social-preview';
export function grammarMetadata(path: string, title: string, description: string): Metadata {
  return {title, description, alternates: {canonical: canonicalUrl(path)}, robots: {index: true, follow: true},
    openGraph: {title, description, url: canonicalUrl(path), type: 'website', images: [socialPreviewImage]},
    twitter: {card: 'summary_large_image', title, description, images: [socialPreviewUrl]}};
}
