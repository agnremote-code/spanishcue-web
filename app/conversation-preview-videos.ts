/** Conversation lessons with a short real recording that plays while the card is hovered. */
export const conversationPreviewVideoIds = new Set<number>([11,15,17,19,20,22,24,25,26,27,29,30,32,33,34,36,39,101,102,109,120,121,122,123,124,125,126,127,128,129,136,137,138,139,203,205,206,207,210,215,216,221,223,226,227,228,229,237,238,240]);

/** Grammar lessons with a short recording of the class page scrolling down. */
export const grammarPreviewVideoIds = new Set<number>([3,18,23,31,37,40,41,42,43,44,45,46,47,48,106,107,110,111,112,113,114,115,116,117,118,119,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,211,212,213,214,217,218,219,220,230,231,232,233,234,235,239,303,305,307,311,312,314,318,319,320,323,324,327,328,330,331,332,333,335,336,337,338,339,340,341,343,344,346,348,350,351,352,353,356,358,360,361,362,363,364,365,366,367,369,370,371,372,373,374,375,376,377,379,380,382,383,384,385,389,390,391,392,393,394,395,396,398,399,401,402,406,408,409,410,411,412,413,415,416,417,418,419,420,421,422,423,425,426,427,429,430]);

export function previewVideo(id: number): string | null {
  if (conversationPreviewVideoIds.has(id)) return `/conversation-previews/${id}.mp4`;
  if (grammarPreviewVideoIds.has(id)) return `/grammar-previews/${id}.mp4`;
  return null;
}
