'use client';
// The game runs only in the browser: see app/client-only/GameLoading.tsx.
import dynamic from 'next/dynamic';
import GameLoading from '../client-only/GameLoading';

export default dynamic(() => import('./RealityGame'), { ssr: false, loading: () => <GameLoading title="La casa" /> });
