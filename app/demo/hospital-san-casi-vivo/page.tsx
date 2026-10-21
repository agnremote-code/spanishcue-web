import type {Metadata} from 'next';
import {headers} from 'next/headers';
import {redirect} from 'next/navigation';
import {fullAccessFromHeaders,signedInFromHeaders} from '../../access-policy';
import {DEMO_FENCE,hospitalDemoContent} from '../../hospital-san-casi-vivo/demo-content.mjs';
import HospitalDemo from '../../hospital-san-casi-vivo/HospitalDemo';
import '../../immersive/immersive.css';
export const metadata:Metadata={title:'Hospital San Casi Vivo gratis · SPANISHCUE',description:'Entra gratis a la recepción del hospital 3D y conversa en español, en siete niveles. Sin tarjeta.',robots:{index:false,follow:false}};
export default async function Page(){
 const h=await headers();
 if(fullAccessFromHeaders(h))redirect('/hospital-san-casi-vivo');
 return <HospitalDemo content={hospitalDemoContent()} fence={DEMO_FENCE} signedIn={signedInFromHeaders(h)} />;
}
