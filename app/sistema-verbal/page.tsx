import type {Metadata} from "next";
import SystemHub from "../verbal-system/SystemHub";
import {verbalLessonSummaries} from "../verbal-system/lesson-data";

export const metadata:Metadata={title:"Sistema verbal: modos y tiempos | SPANISHCUE",description:"Una única ruta A1–C2 para explorar los 16 tiempos del español y el imperativo por modo o por tiempo."};
export default function Page(){return <SystemHub lessons={verbalLessonSummaries}/>}
