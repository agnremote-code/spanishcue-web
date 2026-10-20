import { build } from 'esbuild';
export async function loadCourse() {
  const bundle = await build({ stdin: { contents: "export { modulesByLevel } from './app/autoestudio/curriculum/course'; export { objectivesByLevel } from './app/autoestudio/curriculum/objectives';", resolveDir: process.cwd(), loader: 'ts' }, bundle: true, platform: 'node', format: 'esm', write: false, logLevel: 'error' });
  return import('data:text/javascript;base64,' + Buffer.from(bundle.outputFiles[0].text).toString('base64'));
}
