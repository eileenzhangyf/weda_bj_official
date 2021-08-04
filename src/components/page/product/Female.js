import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  } from 'react-router-dom';
import { Text } from 'react-native';
import './Female.css';
import pigs from './product_img/2400pigs.png';
import sowcomp from './product_img/sowcomp_female.png';
import entrance from './product_img/sowcomp_entrance.png';
import exit from './product_img/sowcomp_exit.png';
import board from './product_img/sowcomp_board.png';

  export function Female(){
      return(
          <div className="female">
              <h2>母猪电子饲喂</h2>
              <h3>食物随叫随到。您可以使用我们的电子饲喂系统，为每只动物准确地分配其所需的饲料量。</h3>
              <img src={pigs} width="650" height="400" className="pigsimage"/>
              <a className="pigs-text"><span>2400头母猪</span></a>

              <h4>电子站母猪饲喂</h4>
              <p className="p-pigs">适合群体管理。电子饲喂站尤其适合群养管理，母猪可以不受打扰的采食，饲料量每只母猪量身设定。</p>
              <img src={sowcomp} width="850" height="400"/>

              <h4>SowComp</h4>
              <p className="p-pigs">使用我们的SowComp，使母猪饲料味道好。SowComp是一种计算机控制的电子饲喂系统，尤其适用于母猪的群体管理。耳式发射器使得能够对个体母猪进行预编程饲喂。</p>
              <img src={entrance} width="700" height="450"/>
              <a className="pigs-text"><span>入口区</span></a>
              <img src={exit} width="700" height="450"/>
              <a className="pigs-text"><span>出口区有选择</span></a>
              
              <p className="p-pigs">学会吃东西。各配备齐全的Weda电子饲喂站也可以用作培养台。4PX SowComp的现代化控制系统具有以实践为导向的用户友好型程序，是动物能够接受培养，不产生任何问题。</p>
              <img src={board} width="900" height="450"/>
              <div className="goback"><Link to="/">&larr; 返回主页</Link></div>
          </div>
      )
  }