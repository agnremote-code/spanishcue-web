/**
 * Browser page translation (Chrome/Edge «Translate this page», Safari, Yandex) replaces text nodes
 * with <font> wrappers behind React's back. The next React update then calls removeChild or
 * insertBefore with a node that is no longer where React left it, the browser throws
 * NotFoundError and the whole screen falls to the error boundary («Something went wrong»).
 * Students with auto-translate lost their Homework that way (2026-11-18).
 *
 * These two guards make such a mismatch harmless instead of fatal. They only change behaviour in
 * the case that used to throw; normal DOM work is untouched.
 */
type GuardedNode = { __spanishcueTranslationGuard?: true };

export function installDomTranslationGuard(nodeClass: typeof Node | undefined = typeof Node === "function" ? Node : undefined): void {
  const proto = nodeClass?.prototype as (Node & GuardedNode) | undefined;
  if (!proto || proto.__spanishcueTranslationGuard) return;
  const removeChild = proto.removeChild;
  const insertBefore = proto.insertBefore;
  proto.removeChild = function <T extends Node>(this: Node, child: T): T {
    // Already moved or replaced by the translator: there is nothing of ours left to remove here.
    if (child && child.parentNode !== this) return child;
    return removeChild.call(this, child) as T;
  };
  proto.insertBefore = function <T extends Node>(this: Node, node: T, reference: Node | null): T {
    // The sibling React aimed at is gone: keep the new content, at the end of its parent.
    if (reference && reference.parentNode !== this) return insertBefore.call(this, node, null) as T;
    return insertBefore.call(this, node, reference) as T;
  };
  Object.defineProperty(proto, "__spanishcueTranslationGuard", { value: true, enumerable: false });
}

installDomTranslationGuard();
