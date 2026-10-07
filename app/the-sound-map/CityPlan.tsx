/** An illustrated plan of the same six places when GPU rendering is unavailable. */
export default function CityPlan(){
 return <svg className="sm-city-plan" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
  <defs><pattern id="sm-water" width="5" height="4" patternUnits="userSpaceOnUse"><path d="M0 2h2m1 1h1" fill="none" stroke="#b9dcd2" strokeWidth=".2"/></pattern></defs>
  <rect x="2" y="8" width="96" height="84" rx="5" fill="#e2d8be"/>
  <path d="M87 8h6q5 0 5 5v74q0 5-5 5h-6Z" fill="#83b9b1"/><path d="M87 8h11v84H87Z" fill="url(#sm-water)"/>
  <path d="M46 8h8v84h-8Z M2 49h85v8H2Z" fill="#f8f0dc"/>
  <path d="M50 11v33m0 17v27" stroke="#c8b894" strokeWidth=".5" strokeDasharray="2 2"/>
  <path d="M83 12v76" stroke="#faf3df" strokeWidth="2"/>
  <rect x="8" y="59" width="31" height="25" rx="4" fill="#aac19a"/>
  <path d="M9 76q12-18 28-7" fill="none" stroke="#e7dfbb" strokeWidth="3"/>
  {[[14,82],[34,82],[12,63],[36,62],[8,41],[79,19],[77,83],[59,84]].map(([x,y])=><g key={`${x}-${y}`}><ellipse cx={x+1} cy={y+1} rx="2.6" ry="2.2" fill="#738969" opacity=".2"/><circle cx={x} cy={y} r="2.3" fill="#6e956e"/><circle cx={x-.5} cy={y-.5} r="1.4" fill="#86ac7d"/></g>)}
  {[[15,31,18,13,'#c88772'],[41,14,18,11,'#cc967b'],[13,12,19,12,'#82a1a1'],[16,85,17,5,'#c5aa82'],[61,85,15,5,'#d2957c']].map(([x,y,w,h,c],i)=><g key={i}>
   <rect x={Number(x)+1} y={Number(y)+1.5} width={w} height={h} rx=".7" fill="#927f65" opacity=".25"/>
   <rect x={x} y={y} width={w} height={h} rx=".5" fill={String(c)}/>
   <rect x={Number(x)+1} y={Number(y)+1} width={Number(w)-2} height={Number(h)-2} rx=".3" fill="none" stroke="#f6dcbc" strokeWidth=".5"/>
  </g>)}
  <path d="M16 42h16v3H16Z" fill="#ebcca8"/><path d="M17 44h14" stroke="#56726a" strokeWidth=".4"/>
  <path d="M43 16h14" stroke="#665e4d" strokeWidth=".3"/>
  {[44,47,50,53,56].map(x=><circle key={x} cx={x} cy="16" r=".55" fill="#fff0b6"/>)}
  <rect x="46" y="19" width="8" height="2" rx=".4" fill="#637f79"/>
  <rect x="70" y="32" width="11" height="10" rx="1" fill="#b29372"/>
  <circle cx="76" cy="37" r="1.1" fill="#ce7963"/><path d="M78 36v4m-1-4h2" stroke="#35544d" strokeWidth=".4"/>
  <rect x="47.5" y="51" width="5" height="8" rx="1.2" fill="#dfa945"/>
  <rect x="48" y="53" width="4" height="3" rx=".6" fill="#426766"/>
  <rect x="49" y="54" width="2" height=".8" rx=".2" fill="#fff2cc"/>
  <path d="M20 72h9m-9 1.5h9" stroke="#936c4c" strokeWidth=".8"/>
  <rect x="69" y="67" width="12" height="8" rx=".7" fill="#fbebc9"/>
  {[69,73,77].map(x=><rect key={x} x={x} y="67" width="2" height="5" fill="#ba6755"/>)}
  {[71,74,77].map(x=><circle key={x} cx={x} cy="74" r=".65" fill="#dfa447"/>)}
  <path d="M82 51h14v4H82Z" fill="#a18464"/><path d="M83 51v4m3-4v4m3-4v4m3-4v4" stroke="#d9c3a3" strokeWidth=".3"/>
 </svg>;
}
