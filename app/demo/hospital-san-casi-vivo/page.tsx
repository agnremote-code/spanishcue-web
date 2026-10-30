import type {Metadata} from 'next';
import {headers} from 'next/headers';
import {redirect} from 'next/navigation';
import {fullAccessFromHeaders,signedInFromHeaders} from '../../access-policy';
import HospitalFree from '../../hospital-san-casi-vivo/HospitalFree';
import '../../immersive/immersive.css';
export const metadata:Metadata={title:'Hospital San Casi Vivo gratis · SPANISHCUE',description:'Entra gratis a la recepción del hospital 3D y conversa en español, en siete niveles. Sin tarjeta.',robots:{index:false,follow:false}};
export default async function Page(){
 const h=await headers();
 if(fullAccessFromHeaders(h))redirect('/hospital-san-casi-vivo');
 // The free class is the PRO game itself, with some floors and circles locked.
 return <HospitalFree signedIn={signedInFromHeaders(h)} />;
}
