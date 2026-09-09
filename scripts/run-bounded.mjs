import { spawn } from 'node:child_process';
const child=spawn(process.argv[2],process.argv.slice(3),{stdio:'inherit',env:process.env});
const timer=setTimeout(()=>{child.kill('SIGTERM');setTimeout(()=>child.kill('SIGKILL'),10000).unref()},180000);
child.on('error',e=>{clearTimeout(timer);console.error(e.message);process.exitCode=1});
child.on('exit',(code,signal)=>{clearTimeout(timer);process.exitCode=code??(signal?1:0)});
