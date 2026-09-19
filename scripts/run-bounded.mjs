import { spawn } from "node:child_process";

const useProcessGroup = process.platform !== "win32";
const child = spawn(process.argv[2], process.argv.slice(3), {
  stdio: "inherit",
  env: process.env,
  detached: useProcessGroup,
});

function signalBuild(signal) {
  try {
    process.kill(useProcessGroup ? -child.pid : child.pid, signal);
  } catch (error) {
    if (error?.code !== "ESRCH") throw error;
  }
}

const timer = setTimeout(() => {
  signalBuild("SIGTERM");
  setTimeout(() => signalBuild("SIGKILL"), 10_000).unref();
}, 180_000);

child.on("error", (error) => {
  clearTimeout(timer);
  console.error(error.message);
  process.exitCode = 1;
});
child.on("exit", (code, signal) => {
  clearTimeout(timer);
  // A successful build must not leave detached compilers or copy jobs able to
  // repopulate the sanitized artifact after validation.
  if (useProcessGroup) signalBuild("SIGTERM");
  process.exitCode = code ?? (signal ? 1 : 0);
});
