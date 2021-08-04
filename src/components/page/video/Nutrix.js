import React from 'react';
import Iframe from 'react-iframe';
import './Vplayer.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    BrowserRouter,
    Link
  } from 'react-router-dom';

export function Nutrix(){
    return(
        <div>
            <h2>仔猪补奶系统Nutrix</h2>
            <Iframe 
                height="450" 
                width="750"
                src='https://player.youku.com/embed/XNDkxNjQyMDk2NA==' 
                className="vv-player"
            />
            <div className="goback"><Link to="/">&larr; 返回主页</Link></div>
        </div>
    )
}