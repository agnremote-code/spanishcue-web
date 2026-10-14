import type {Metadata} from 'next';
import {headers} from 'next/headers';
import {fullAccessFromHeaders,signedInFromHeaders} from '../../access-policy';
import {demoContent} from '../../immersive/demo-content.mjs';
import GoogleTeachersLanding from '../../immersive/GoogleTeachersLanding';
import {proPreviews,showcase} from '../../immersive/google-showcase';
import '../../immersive/immersive.css';
import '../../immersive/google-teachers.css';

/** Google Search campaign landing for teachers. Campaign-only: noindex, follow, like every /lp page. */
export const metadata:Metadata={
 title:'Interactive Spanish Lessons for Online Teachers. Ready to Teach. | SPANISHCUE',
 description:'Stop preparing Spanish lessons from scratch. 3D conversation worlds, interactive grammar, listening and homework for online Spanish teachers, A1–C2. Try PRO for US$2.',
 robots:{index:false,follow:true},
 alternates:{canonical:'https://spanishcue.com/lp/google-teachers'},
};

const TOUR_LEVEL='A2';
/** PRO grammar classes previewed on the landing: one rule and one exercise each, cut on the server. */
const PREVIEW_IDS=[48,230];

export default async function Page(){
 const h=await headers();
 const cafe=demoContent(TOUR_LEVEL)!.locations.find(l=>l.id==='cafe')!;
 return <GoogleTeachersLanding pro={fullAccessFromHeaders(h)} signedIn={signedInFromHeaders(h)} cafe={cafe} level={TOUR_LEVEL} showcase={showcase()} previews={proPreviews(PREVIEW_IDS)} />;
}
