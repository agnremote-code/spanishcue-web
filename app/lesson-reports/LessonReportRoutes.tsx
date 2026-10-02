'use client';
import {usePathname} from 'next/navigation';
import LessonReportPanel from './LessonReportPanel';
type LessonInfo={id:number;title:string;level:string;levels?:string[];path:string};
export default function LessonReportRoutes({lessons,signedIn}:{lessons:LessonInfo[];signedIn:boolean}){const pathname=usePathname();const lesson=lessons.find(l=>l.path===pathname);return lesson?<LessonReportPanel key={pathname} lesson={lesson} signedIn={signedIn}/>:null;}
