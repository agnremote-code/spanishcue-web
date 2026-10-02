import { env } from 'cloudflare:workers';
import type { ShareEnvironment } from './server';
export const shareEnvironment = env as unknown as ShareEnvironment;
