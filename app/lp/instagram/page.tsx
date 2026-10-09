import type {Metadata} from 'next';
import {headers} from 'next/headers';
import {fullAccessFromHeaders,signedInFromHeaders} from '../../access-policy';
import ImmersiveLanding from '../../immersive/ImmersiveLanding';
import '../../immersive/immersive.css';
export const metadata:Metadata={title:'Enter the 3D city — free | SPANISHCUE',description:'Explore a real Spanish lesson in a 3D city. Free centre, ten venues and six levels. No card or registration.',robots:{index:false,follow:true},alternates:{canonical:'https://spanishcue.com/lp/instagram'}};
export default async function Page(){const h=await headers();return <ImmersiveLanding pro={fullAccessFromHeaders(h)} signedIn={signedInFromHeaders(h)}/>;}
