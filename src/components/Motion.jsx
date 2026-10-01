import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import {createContext, useContext} from 'react';
const PointerContext=createContext(null);
export function DepthStage({children,className=''}) {
 const reduced=useReducedMotion();
 const x=useSpring(0,{stiffness:85,damping:24}), y=useSpring(0,{stiffness:85,damping:24});
 function move(e){if(reduced||!matchMedia('(hover: hover) and (pointer: fine)').matches)return;const r=e.currentTarget.getBoundingClientRect();x.set((e.clientX-r.left)/r.width-.5);y.set((e.clientY-r.top)/r.height-.5);}
 return <PointerContext.Provider value={{x,y,reduced}}><div className={className} onPointerMove={move} onPointerLeave={()=>{x.set(0);y.set(0)}}>{children}</div></PointerContext.Provider>;
}
export function DepthLayer({children,className='',depth=12}) {
 const pointer=useContext(PointerContext);
 const x=useTransform(pointer.x,[-.5,.5],[-depth,depth]);
 const y=useTransform(pointer.y,[-.5,.5],[-depth/2,depth/2]);
 return <motion.div className={className} style={pointer.reduced?{}:{x,y}}>{children}</motion.div>;
}
export function MagneticLink({children,className='',...props}) {
 const reduced=useReducedMotion();
 const x=useSpring(0,{stiffness:180,damping:20}),y=useSpring(0,{stiffness:180,damping:20});
 function move(e){if(reduced||!matchMedia('(hover: hover) and (pointer: fine)').matches)return;const r=e.currentTarget.getBoundingClientRect();x.set((e.clientX-r.left-r.width/2)*.12);y.set((e.clientY-r.top-r.height/2)*.16);}
 return <motion.a {...props} className={className} style={reduced?{}:{x,y}} onPointerMove={move} onPointerLeave={()=>{x.set(0);y.set(0)}}>{children}</motion.a>;
}
export function Tilt({children,className='',amount=4}) {
 const reduced=useReducedMotion();
 const x=useMotionValue(0),y=useMotionValue(0);
 const sx=useSpring(x,{stiffness:110,damping:24}),sy=useSpring(y,{stiffness:110,damping:24});
 const rotateX=useTransform(sy,[-.5,.5],[amount,-amount]);
 const rotateY=useTransform(sx,[-.5,.5],[-amount,amount]);
 const moveX=useTransform(sx,[-.5,.5],[-5,5]);
 const moveY=useTransform(sy,[-.5,.5],[-4,4]);
 function move(e){if(reduced||!matchMedia('(hover: hover) and (pointer: fine)').matches)return;const r=e.currentTarget.getBoundingClientRect();x.set((e.clientX-r.left)/r.width-.5);y.set((e.clientY-r.top)/r.height-.5);}
 return <motion.div className={className} onPointerMove={move} onPointerLeave={()=>{x.set(0);y.set(0);}} style={reduced?{}:{rotateX,rotateY,x:moveX,y:moveY,transformPerspective:1200}}>{children}</motion.div>;
}
export function Reveal({children,className='',delay=0}){const reduced=useReducedMotion();return <motion.div className={className} initial={false} whileInView={reduced?{}:{y:[18,0]}} viewport={{once:true,amount:.12}} transition={{duration:.65,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>}
