// This only permits Node to inspect the export shape of a Cloudflare artifact.
// Request handling is tested separately in the actual local Worker runtime.
import { registerHooks } from 'node:module';
registerHooks({resolve(specifier,context,next){if(specifier==='cloudflare:workers')return {url:'data:text/javascript,export const env={};',shortCircuit:true};return next(specifier,context)}});
