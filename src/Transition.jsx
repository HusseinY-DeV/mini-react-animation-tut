import './App.css';
import {useState} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import img from './flower.jpg';



const Transition = () => {
    return ( 
        <div className="trans">
            <ScrollAnimation animateIn="fadeIn" className="row" offset={400}> 
                <img src={img} alt="" height="500px"/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam perferendis voluptas, eum eligendi labore consectetur aliquid tempora quae suscipit nesciunt.</p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" className="row">
            <img src={img} alt="" height="500px"/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam perferendis voluptas, eum eligendi labore consectetur aliquid tempora quae suscipit nesciunt.</p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" className="row">
            <img src={img} alt="" height="500px"/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam perferendis voluptas, eum eligendi labore consectetur aliquid tempora quae suscipit nesciunt.</p>
            </ScrollAnimation>
        </div>
     );
}
 
export default Transition;