import React from 'react';
import Iframe from 'react-iframe';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    BrowserRouter,
    Link
  } from 'react-router-dom';

export function Group(){
    return(
        <div className="group">
            <h2>猪群管理</h2>
            <Iframe 
                height="498" 
                width="710" 
                src='https://player.youku.com/embed/XNDkxNjQyMjI2OA==' 
                className="vv-player"/>

            <div className="goback"><Link to="/">&larr; 返回主页</Link></div>
        </div>
    )
}