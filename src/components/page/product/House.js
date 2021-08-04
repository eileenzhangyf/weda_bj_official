import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  } from 'react-router-dom';
import './House.css';
import classichouse from './product_img/classichouse.png';
import babyhouse from './product_img/babyhouse.png';
import lockfirst from './product_img/lockfirst.png';
import lock2 from './product_img/lock2.png';
import houses4 from './product_img/houses4.png';
import drink from './product_img/drinking_pigs.png';

  export function House(){
      return(
          <div className="house">
              <h2>栏体设备</h2>
              <h3>以最高水平安全养猪。Weda畜栏采用优质材料制成，在Weda畜栏中，动物完全能够感受到舒适。因栏位无任何突出部分，因此不存在对人类和动物造成伤害的风险。</h3>
              <img src={classichouse} width="550" height="400" className="houseimage"/>
              <a className="house-text"><span>标准类育肥畜栏</span></a>
              <img src={babyhouse} width="550" height="400" className="houseimage"/>
              <a className="house-text"><span>标准类仔猪畜栏</span></a>

              <h4>仔猪畜栏和育肥畜栏的门锁</h4>
              <p className="p-house">畜栏易于打开。使用我们的门锁，能够轻松地打开畜栏。这使得管理动物工作更加容易。</p>
              <img src={lockfirst} width="850" height="400" className="houseimage"/>
              <img src={lock2} width="850" height="400" className="houseimage"/>

              <h4>仔猪食槽和育肥食槽</h4>
              <p className="p-house">Weda质量。我们的食槽在我们位于Lutten的公司总部生产，提供最高级别的卫生安全。</p>
              <img src={houses4} width="750" height="500" className="houseimage"/>

              <h4>仔猪饮水器和育肥饮水器</h4>
              <p className="p-house">最佳饮水。各种尺寸的不锈钢饮水器能够为您的动物进行最佳饮水。</p>
              <img src={drink} width="850" height="400" className="houseimage"/>
              <div className="goback"><Link to="/">&larr; 返回主页</Link></div>
          </div>
      )
  }