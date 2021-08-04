import React from 'react';
import './Vplayer.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    BrowserRouter,
    Link
  } from 'react-router-dom';
  import Iframe from 'react-iframe';

  export function Vwind(){
      return(
          <div>
              <h2>唯达通风系统</h2>

              <iframe height="450" 
              width="750" 
              src='https://player.youku.com/embed/XNDkxNjQxNjI5Mg=='
              ></iframe>

              <div className="goback"><Link to="/">&larr; 返回主页</Link></div>
          </div>
      )
  }