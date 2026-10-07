export const LEVELS = ['A0','A1','A2','B1','B2','C1','C2'];
export const LOCATIONS = ['balcony','singer','taxi','park','vendor','rooftop'];
export const resolveLevel = value => LEVELS.includes(value) ? value : 'A0';
export const initialProgress = () => Object.fromEntries(LEVELS.map(level=>[level,[]]));
export function markComplete(progress,level,id) {
 if(!LEVELS.includes(level)||!LOCATIONS.includes(id))return progress;
 return {...progress,[level]:[...new Set([...(progress[level]??[]),id])]};
}
export function restoreProgress(raw) {
 const clean=initialProgress();
 try {const parsed=JSON.parse(raw);for(const level of LEVELS)if(Array.isArray(parsed?.[level]))clean[level]=[...new Set(parsed[level].filter(id=>LOCATIONS.includes(id)))];} catch {}
 return clean;
}
