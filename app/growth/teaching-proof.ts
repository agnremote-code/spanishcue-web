/** Owner-authorized public evidence, checked live. Recheck before changing any claim. */
export const teachingProof = {
  source: 'https://preply.com/en/tutor/4226888',
  checkedAt: '2026-10-07', checkedLabel: '7 October 2026',
  lessonsObserved: 4194, lessonClaim: '4,000+', rating: 5, reviewCount: 52,
  badges: ['Professional Tutor', 'Super Tutor'],
  // Verbatim excerpts: 21 words in total from this source. No names of the owner or images.
  reviews: [
    {student: 'Charlie', date: '17 August 2026', quote: 'Engaging and fun.'},
    {student: 'Joshua', date: '8 July 2026', quote: 'he adjusts to exactly what I need in the moment'},
    {student: 'Tammy', date: '2 June 2026', quote: 'I feel wonderful progress from week to week'},
  ],
} as const;
