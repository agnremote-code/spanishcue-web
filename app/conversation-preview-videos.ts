/** Conversation lessons with a short real recording that plays while the card is hovered. */
export const conversationPreviewVideoIds = new Set<number>([11,15,17,19,20,22,24,25,26,27,29,30,32,33,34,36,39,101,102,109,120,121,122,123,124,125,126,127,128,129,136,137,138,139,203,205,206,207,210,215,216,221,223,226,227,228,229,237,238,240]);

export function conversationPreviewVideo(id: number): string | null {
  return conversationPreviewVideoIds.has(id) ? `/conversation-previews/${id}.mp4` : null;
}
