#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${SITES_ENV_READY:-}" != "1" ]]; then
  exec "${script_dir}/sites-env.sh" -- "$0" "$@"
fi


vinext="${SITES_PROJECT_ROOT}/node_modules/.bin/vinext"
if [[ ! -x "${vinext}" ]]; then
  echo "vinext is unavailable. Run npm run install:ci and wait for it to finish before building." >&2
  exit 69
fi

echo "Removing the previous generated build..."
rm -rf -- "${SITES_PROJECT_ROOT}/dist"

echo "Running bounded vinext build..."
node "${script_dir}/run-bounded.mjs" "${vinext}" build

# Some vinext asset copies settle immediately after the parent command exits.
# Wait for a stable output tree before deriving the private/public allowlist.
node "${script_dir}/wait-for-build-quiescence.mjs"

node "${script_dir}/protect-client-assets.mjs"

# Recreate the completed output from an allowlist after the build subprocesses
# have exited. This also makes packaging resilient in synchronized workspaces.
node "${script_dir}/finalize-protected-build.mjs"
# Vinext can finish copying static assets just after its build command returns.
# The finalizer is idempotent; a second pass keeps the protection denylist
# authoritative before the artifact validator reads the completed output.
node "${script_dir}/finalize-protected-build.mjs"

"${script_dir}/validate-artifact.sh"
