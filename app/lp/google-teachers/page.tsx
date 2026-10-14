import type {Metadata} from 'next';
import {headers} from 'next/headers';
import {fullAccessFromHeaders,signedInFromHeaders} from '../../access-policy';
import {demoContent} from '../../immersive/demo-content.mjs';
import {DEMO_LEVELS} from '../../immersive/policy.mjs';
import GoogleTeachersLanding,{type SampleActivity} from '../../immersive/GoogleTeachersLanding';
import '../../immersive/immersive.css';
import '../../immersive/google-teachers.css';

/** Google Search campaign landing for teachers. Campaign-only: noindex, follow, like every /lp page. */
export const metadata:Metadata={
 title:'Interactive Spanish Teaching Resources for Online Teachers | SPANISHCUE',
 description:'Ready-to-teach Spanish lessons, conversation activities and 3D worlds for online teachers, A1–C2. Explore the 3D city free. No card or sign-up.',
 robots:{index:false,follow:true},
 alternates:{canonical:'https://spanishcue.com/lp/google-teachers'},
};

// The same free café scene the demo opens, at every level, so the page shows real lesson content.
function samples():SampleActivity[]{
 return DEMO_LEVELS.map(level=>{
  const cafe=demoContent(level)!.locations.find(l=>l.id==='cafe')!;
  const a=cafe.activities[0];
  return {level,venue:cafe.name,title:a.title,situation:a.situation??'',prompt:a.prompt??'',options:(a.options??[]).map(o=>o.label),close:a.close??'',teacher:a.teacher??[]};
 });
}

export default async function Page(){
 const h=await headers();
 return <GoogleTeachersLanding pro={fullAccessFromHeaders(h)} signedIn={signedInFromHeaders(h)} samples={samples()} />;
}
