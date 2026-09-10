import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
export default function FloatingReviewBadge() {
  const [visible,setVisible]=useState(false);
  const [dismissed,setDismissed]=useState(false);
  useEffect(()=>{
    const onScroll=()=>setVisible(window.scrollY>800 && window.scrollY<document.documentElement.scrollHeight-window.innerHeight-400);
    window.addEventListener('scroll',onScroll,{passive:true});
    return ()=>window.removeEventListener('scroll',onScroll);
  },[]);
  if(!visible||dismissed)return null;
  return <aside className="fixed left-4 bottom-24 z-40 hidden md:flex items-center gap-3 rounded-xl border bg-white p-4 shadow-lg">
    <a href="https://www.google.com/search?q=staycool+airco" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-700 underline">Bekijk klantervaringen op Google</a>
    <button aria-label="Klantervaringen verbergen" onClick={()=>setDismissed(true)} className="p-2"><X size={16}/></button>
  </aside>;
}
