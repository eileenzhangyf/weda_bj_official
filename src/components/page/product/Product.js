import React, { useState } from 'react';
import './Product.css';
import img from './IMG_7518.JPG';
import {ImageBackground,View,Text} from 'react-native-web';
import {Slideshow} from './Slideshow';
import {SlideExample} from './SlideExample';
import {Liquid} from './Liquid';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    BrowserRouter,
    Link
  } from 'react-router-dom';


export function Product() {
        return(
            <div className="product">
                <h1>产品展示</h1>
                <nav>
                <ul>
                    <li>
                    
                        {/*<View style={{top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                            <ImageBackground source={img} style={{width: '40%', height: '40%', position:'absolute'}}>
                                <Text>Centered text</Text>
                            </ImageBackground>
                        </View>*/}                   
                    <a className="main-item"><Link to="/liquid">干料饲喂</Link></a>
                    </li>
                    <li><a className="main-item"><Link to="/house">圈舍设备</Link></a></li>
                    <li><a className="main-item"><Link to="/female">母猪电子饲喂</Link></a></li>
                    <li><a className="main-item"><Link to="/dry">液态氮饲喂</Link></a></li>
                    <li><a className="main-item"><Link to="/environment">环境控制技术</Link></a></li>
                </ul>
                </nav>
                {/*<Switch>
                    <Route exact path="/liquid">
                        <Liquid/>
                    </Route>

                </Switch>*/}
            <Slideshow/>
            </div>
        );
    
};