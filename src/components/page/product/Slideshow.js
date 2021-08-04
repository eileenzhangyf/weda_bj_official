import React,{useState,useEffect,useRef} from 'react';
import './Slideshow.css';
import img1 from './liquid.png';
import img2 from './dry_feeding.jpg';
import img3 from './house.png';
import img4 from './electronic.jpg';
import img5 from './environment.jpg';
import img6 from './baby_pigs.png';

const slideImages=[
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
];

const delay=5000;

export function Slideshow(){
    const [index, setIndex]=React.useState(0);
    const timeoutRef=React.useRef(null);

    function resetTimeout(){
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(()=>{
        timeoutRef.current=setTimeout(
           ()=> 
           setIndex((prevIndex)=>
                prevIndex===slideImages.length-1?0:prevIndex+1
           ),
           delay
        );
        return ()=>{
            resetTimeout();
        };
    },[index]);
    return(
        <div className="slideshow">
            <div className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {slideImages.map((img,index)=>(
                    <div
                        className="slide"
                        key={index}
                        style={{'backgroundImage': `url(${img})`}}
                    >
                    {/*<span>Slide name {index}</span>*/}
                    </div>
                ))}
                </div>
                <div className="slideshowDots">
                    {slideImages.map((_,idx)=>(
                        <div key={idx} 
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={()=>{
                            setIndex(idx);
                        }}
                        ></div>
                    ))}
                </div>
        </div>
    )
}