'use client';
import {usePathname} from 'next/navigation';
import dynamic from 'next/dynamic';
// The report UI is needed only on lesson routes. Keep it out of landing bundles.
const LessonReportPanel = dynamic(() => import('./LessonReportPanel'));
type LessonInfo={id:number;title:string;level:string;levels?:string[];path:string};
export default function LessonReportRoutes({lessons,signedIn}:{lessons:LessonInfo[];signedIn:boolean}){const pathname=usePathname();const lesson=lessons.find(l=>l.path===pathname);return lesson?<LessonReportPanel key={pathname} lesson={lesson} signedIn={signedIn}/>:null;}
