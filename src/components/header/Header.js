import React from 'react';
import './Header.css';
import logo from './WechatIMG38.jpeg';
import {Menu} from '../page/news/Menu';
import {Test} from '../page/news/Test';
import {Dvideo} from './Dvideo';
import {Dnews} from './Dnews';
import {Dcontact} from "./Dcontact";

export class Header extends React.Component{
    render(){
    return (
        <section className="header">
            <span className="header-logo">
                <a href="/" className="logo">
                    <img src={logo} width="120" height="70"/>
               </a>
            </span>
            <nav>
                <li><Test/></li>
                <li><Dvideo/></li>
                <li><Dnews/></li>
                <li><Dcontact/></li>
            </nav>     
          {/*  <section className="header-bottom">
                <section className="contact">

                </section>
    </section>*/}
        </section>
    );
}
};
{/*export default Header;*/}

