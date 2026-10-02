import type { Metadata } from 'next';
import ClaimClient from './ClaimClient';
export const metadata: Metadata = {title:'Tu acceso de Autoestudio | SpanishCue', robots:{index:false,follow:false},referrer:'no-referrer'};
export default function ClaimPage(){return <ClaimClient/>;}
