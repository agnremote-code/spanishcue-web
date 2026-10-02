/** Editorial metadata, never inferred from IDs or catalog order. */
export function selectNews(lessons) {
 return lessons.filter(l=>l.news?.featured && l.image && l.href?.startsWith('/') && /^\d{4}-\d{2}-\d{2}$/.test(l.news.addedAt)).sort((a,b)=>b.news.addedAt.localeCompare(a.news.addedAt)||b.id-a.id).slice(0,6);
}
