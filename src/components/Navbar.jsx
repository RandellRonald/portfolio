import {useState,useEffect,useRef} from 'react';
import {Menu,X,ArrowUpRight} from 'lucide-react';
export const sections=['home','about','projects','skills','contact'];
export default function Navbar(){const[open,setOpen]=useState(false);const[active,setActive]=useState('home');const toggle=useRef(null);
 useEffect(()=>{const observer=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting);if(visible.length)setActive(visible[0].target.id);},{rootMargin:'-15% 0px -65% 0px'});sections.forEach(id=>{const el=document.getElementById(id);if(el)observer.observe(el)});return()=>observer.disconnect()},[]);
 useEffect(()=>{if(!open)return;const key=e=>{if(e.key==='Escape'){setOpen(false);toggle.current?.focus()}};document.addEventListener('keydown',key);return()=>document.removeEventListener('keydown',key)},[open]);
 return <header className="site-header"><div className="nav-shell"><a href="#home" className="brand" aria-label="Randell, home">randell<span>.</span></a><button ref={toggle} className="menu-toggle" onClick={()=>setOpen(!open)} aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="main-nav">{open?<X/>:<Menu/>}</button><nav id="main-nav" aria-label="Main navigation" className={open?'navigation is-open':'navigation'}>{sections.map(s=><a key={s} href={'#'+s} aria-current={active===s?'location':undefined} onClick={()=>{setOpen(false);setActive(s)}}>{s}</a>)}</nav><a className="nav-contact" href="mailto:randellronald5@gmail.com">Let’s talk <ArrowUpRight size={16}/></a></div></header>
}
