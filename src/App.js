import './App.css';
import {useRef , useEffect, useState} from 'react';
import {TweenMax , Power3 , TimelineLite} from 'gsap';
import Transition from './Transition';


function App() {

  let tl = new TimelineLite();
  let yCircle = useRef(null);
  let bCircle = useRef(null);
  let rCircle = useRef(null);
  let container = useRef(null);
  let slider = useRef(null);

  const handleMouseIn = () => {
      TweenMax.to(bCircle,0.4,{height:"200px",width:"200px",ease:Power3.easeOut});
  }

  const handleMouseOut = () => {
    TweenMax.to(bCircle,0.4,{height:"50px",width:"50px",ease:Power3.easeOut});
}

  
  useEffect(() => {
    tl.to(container,0,{visibility:"visible"})
    .to(slider,2,{y:"-100%",ease:Power3.easeIn})
    .staggerFrom([yCircle,bCircle,rCircle],1,{opacity:0,x:50,Power3:"easeInOut"},.3);
  }, []);

  return (
   <div className="app" ref={el => container = el }>
     <div className="slider" ref={el => slider = el}>Hello World</div>
     <div className="circle-con">
       <div className="circle" ref={el => yCircle =el}></div>
       <div className="circle" ref={el => bCircle =el}
       onMouseOver={handleMouseIn}
       onMouseOut={handleMouseOut}
       ></div>
       <div className="circle" ref={el => rCircle =el}></div>
     </div>
     <Transition />
   </div>
  )
}

export default App;