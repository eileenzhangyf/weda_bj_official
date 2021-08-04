import React, { useState } from 'react';
import './Banner.css';
import Background from './WechatIMG41.jpeg';
import {Button} from './Button';

var sectionStyle={
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Background})`,
    backgroundSize:'cover',
    backgroundRepeat: 'no-repeat',
    
};

const ReadMore=({children})=>{
    const text=children;
    const [isReadMore, setIsReadMore]=useState(true);
    const toggleReadMore=()=>{
        setIsReadMore(!isReadMore);
    };
    return(
        <p className="text">
            {isReadMore?text.slice(0,70):text}
            <span onClick={toggleReadMore} className="read-or-hide">
                {isReadMore?"...read more": "show less"}
            </span>
        </p>
    );
};

export const Banner =()=>{

        return(
            <div className="banner" style={sectionStyle}>
                <h1>唯达 (北京) 国际贸易有限公司---我们关心猪的健康</h1>
           </div>
        )

}
