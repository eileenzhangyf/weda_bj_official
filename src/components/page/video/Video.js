import React from 'react';
import ReactPlayer from "react-player"
import './Video.css';
import Iframe from 'react-iframe';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    BrowserRouter,
    Link
  } from 'react-router-dom';


export class Video extends React.Component{
    render(){
        return(
            <div className="video">
                <h1>视频中心</h1>
                <nav>
                    <ul>
                        <li><a onClick={() => window.location.replace("/#vplayer")}>唯达养猪设备</a></li>
                        <li><a><Link to="/group">猪群管理</Link></a></li>
                        <li><a><Link to="/nutrix">仔猪饲喂系统Nutrix</Link></a></li>
                        <li><a><Link to="/wind">唯达通风系统</Link></a></li>
                    </ul>
                </nav>
                <Iframe 
                        height="450px"
                        width="800px"
                        src='https://player.youku.com/embed/XNDkxNjQxOTMyOA==' frameborder="0" 
                        className="player"
                        id="vplayer"
                        />
                {/*<div className="player">
                    <ReactPlayer
                        url="https://youtu.be/NaXPWhUDYe0"
                        controls="true"
                    />
                </div>*/}
            </div>

        );
    }
};

