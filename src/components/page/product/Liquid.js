import React from 'react';
import './Liquid.css';
import classic from './product_img/dry_classic.png';
import variety from './product_img/variety.png';
import tubes from './product_img/sixtubes.png';
import driver from './product_img/driver.png';
import fcontainer from './product_img/feed_container.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  } from 'react-router-dom';
export function Liquid(){
    return (
        <div className="liquid">
                <h2>唯达液态料饲喂系统的优势和特点</h2>
                    <h3>安全、可靠、耐用。我们的干料饲喂产品因安全技术和简单操作而获得认可。我们可靠的控制装置
                        和筒仓可满足任何需求。
                    </h3>
                    <img src={classic} width="550" height="400" className="dryimage"/>
                    <a className="explain-text"><span>保育舍以“classic feeder”进行干料饲喂</span></a>
                    <img src={variety} width="550" height="400" className="dryimage"/>
                    <a className="explain-text"><span>育肥舍多种饲料饲喂</span></a>
                    <img src={tubes} width="550" height="400" className="dryimage"/>
                    <a className="explain-text"><span>6条输送管线的干料饲喂系统控制中心</span></a>

                    <h4>驱动站和进料斗</h4>
                    <p className="p-feed">坚固可靠。驱动站和进料斗以其可靠的技术获得认可。通过我们高品质的进料斗以及可靠的驱动站，您的动物能够得到最佳的食物供给。
                    </p>
                    <img src={driver} width="550" height="400" className="dryimage"/>
                    <a className="explain-text"><span>驱动站K1</span></a>
                    <h4>容量分配器</h4>
                    <p className="p-feed">始终（分配）适量的饲料。容量分配器直接连接至输料管。通过输料管中的可封闭开口进行填料。</p>
                    <img src={fcontainer} width="850" height="400" className="dryimage"/>
                    <div className="goback"><Link to="/">&larr; 返回主页</Link></div>
        </div>
    )
}