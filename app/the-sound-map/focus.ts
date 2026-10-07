/** Focus survives removal of the scene panel for keyboard and screen-reader users. */
export function restoreSceneFocus(root:ParentNode,id:string|null){
 const controls=root.querySelectorAll<HTMLButtonElement>('[data-sound-location]');
 const target=Array.from(controls).find(button=>button.dataset.soundLocation===id)??controls[0];
 target?.focus({preventScroll:true});
}
