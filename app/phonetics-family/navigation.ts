// Bounded family resolver; existing phonetics and conversation routes stay intact.
export function phoneticsFamilyHref(lesson:{path?:string;category?:string;levels?:string[];level:string}, requested?:string) {
 if(lesson.category!=="Fonética"||!lesson.path||!lesson.levels?.length)return null;
 const level=requested&&lesson.levels.includes(requested)?requested:lesson.level;
 return `${lesson.path}?level=${level}`;
}
