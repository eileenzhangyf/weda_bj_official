import React from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img1 from './IMG_7518.JPG';
import img2 from './IMG_7517.JPG';
import img3 from './IMG_7520.JPG';
import img4 from './IMG_7521.JPG';
/*import './SlideExample.css';*/

const slideImages = [
  img1,
  img2,
  img3,
  img4
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

export const SlideExample =()=> {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div styles={{'backgroundImage': `url(${slideImages[0]})`}}>
          </div>s
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>Slide 3</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
            <span>Slide 4</span>
          </div>
        </div>
      </Slide>
    )
}