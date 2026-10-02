'use client';
import {usePathname} from 'next/navigation';
import LessonReport, {type ReportLesson} from './LessonReport';
/** Root layouts persist during client navigation; resolve the current route here. */
export default function LessonFeedback({lessons,signedIn}:{lessons:(ReportLesson&{href:string})[];signedIn:boolean}){
 const path=(usePathname()||'/').replace(/\/+$/,'')||'/';
 const lesson=lessons.find(item=>item.href===path);
 return lesson?<LessonReport key={lesson.id} lesson={lesson} signedIn={signedIn}/>:null;
}
