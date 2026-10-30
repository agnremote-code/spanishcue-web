import type {Metadata} from 'next';
import {headers} from 'next/headers';
import {redirect} from 'next/navigation';
import {fullAccessFromHeaders,signedInFromHeaders} from '../../access-policy';
import NocheDemo from '../../noche-abierta/NocheDemo';
import '../../immersive/immersive.css';
export const metadata:Metadata={title:'Play Noche Abierta free · SPANISHCUE',description:'Explore the 3D city centre and real Spanish conversations. A1–C2. No sign-up. No card.',robots:{index:false,follow:false}};
// The free class is the PRO game itself, with some districts and circles locked.
export default async function Page({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){
 const h=await headers();const params=await searchParams;
 if(fullAccessFromHeaders(h))redirect('/noche-abierta');
 // Only allowlisted campaign landings can be the demo's way back.
 const home=params.from==='google-teachers'?'/lp/google-teachers':params.from==='aprender-espanol'?'/aprender-espanol':undefined;
 return <NocheDemo signedIn={signedInFromHeaders(h)} home={home} />;
}
