import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  } from 'react-router-dom';
import './Dry.css';
import liquid2 from './product_img/liquid_2.png';
import liquid3 from './product_img/liquid3.png';
import liquid4 from './product_img/liquid4.png';
import liquid6000 from './product_img/liquid6000.png';
import beng from './product_img/beng.png';


export function dry(){
    return(
        <div className="dry">
            <h2>液态氮饲喂</h2>
            <h4>使用Weda BW+进行无残留饲喂</h4>
            <p className="p-dry">为您的动物群指定解决方案。使用Weda设计的液态饲喂系统，即使在距离较远的情况下，仍然能够在短时间内输送大量饲料。使用此类系统，小型动物群和大型动物群始终能够以最佳方式得到饲料供给。</p>
            <img src={liquid2} width="750" height="400"/>
            <img src={liquid3} width="850" height="400"/>
            <p className="p-dry">接下来，我们将展示生产区的部分装置实例。</p>
            <img src={liquid4} width="750" height="400"/>
            <a className="dry-text"><span>10000个肥育位和5000个仔猪位</span></a>
            <img src={liquid6000} width="750" height="400"/>
            <p className="dry-text">6000个肥育位</p>

            <h4>除石器</h4>
            <p className="p-dry">利用泵的安全性。使用除石器来保护您液态饲喂系统的泵。强力磁铁确保金属分离，集成晒网处理非金属物体。</p>
            <img src={beng} width="800" height="400"/>
            <div className="goback"><Link to="/">&larr; 返回主页</Link></div>
        </div>
    )
}