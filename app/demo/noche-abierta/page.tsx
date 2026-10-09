import type {Metadata} from 'next';
import {headers} from 'next/headers';
import {redirect} from 'next/navigation';
import {fullAccessFromHeaders,signedInFromHeaders} from '../../access-policy';
import {demoContent} from '../../immersive/demo-content.mjs';
import CityDemo from '../../immersive/CityDemo';
import '../../immersive/immersive.css';
export const metadata:Metadata={title:'Play Noche Abierta free · SPANISHCUE',description:'Explore the 3D city centre and real Spanish conversations. A1–C2. No sign-up. No card.',robots:{index:false,follow:false}};
export default async function Page({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){
 const h=await headers();const params=await searchParams;
 if(fullAccessFromHeaders(h))redirect('/noche-abierta');
 return <CityDemo initial={demoContent(params.level)!} signedIn={signedInFromHeaders(h)} />;
}
