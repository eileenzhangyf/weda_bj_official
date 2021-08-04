import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  } from 'react-router-dom';

import env1 from './product_img/environment_component.png';
import env2 from './product_img/env2.png';
import env3 from './product_img/env3.png';
import env4 from './product_img/env4.png';
import wind from './product_img/wind.png';
import wind2 from './product_img/wind2.png';
import door from './product_img/door.png';

import './Environment.css';

  export function environment(){
      return(
          <div className="environment">
              <h2>环境控制技术</h2>
              <h4>通风模式</h4>
              <p className="p-env">流线式通风。新鲜空气通过安装在侧墙上的壁送风元件进入单元。</p>
              <img src={env1} width="850" height="400"/>
              <img src={env2} width="850" height="400"/>

              <p className="p-env">送风分配器。使用这种通风方式，送风通过送风分配器（ZLV）进入隔间。</p>
              <img src={env3} width="750" height="400"/>

              <p className="p-env">送风分配器。这种通风方式能够很好地适用于一体化猪舍。</p>
              <img src={env4} width="750" height="400"/>
              <a className="env-text">使用送风分配器进行通风。</a>

              <p className="p-env">分散和组合分散通风。分散和组合分散通风是一种排气控制通风系统。在排气控制系统中流入畜栏的空气可以是无限量的，但是流出的空气量是可控的。</p>
              <img src={wind} width="750" height="400"/>
              <a className="env-text">分散通风</a>

              <img src={wind2} width="750" height="400"/>
              <a className="env-text">组合分散通风</a>

              <p className="p-env">门道通风。门道通风系统是一种排气控制通风系统。有了排气控制系统，流入畜栏的空气可以是无限量的，但是流出的空气量是可控的。</p>
              <img src={door} width="750" height="400"/>
              <a className="env-text">门道通风</a>

              <div className="goback"><Link to="/">&larr; 返回主页</Link></div>
          </div>
      )
  }