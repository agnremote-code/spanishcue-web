// New URLs prevent browsers from reusing covers with an obsolete level range.
const revisedCovers = new Set([46, 47, 48, 106, 107, 239]);

export function grammarThumbnailPath(id, level) {
  const revision = revisedCovers.has(id) ? `-${level.toLowerCase()}` : '';
  return `/grammar-thumbnails/${id}${revision}.webp`;
}
