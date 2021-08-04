import React from 'react';
import './Contact.css';
import info from './wechatID.png';

export class Contact extends React.Component{
    render(){
        return(
            <div className="Contact" id="contact">
                <h1>联系我们</h1>
                <div className="info-all">
                    <a className="info-item">公司地址： 北京市门头沟区石龙经济开发区永安路20号</a>
                    <a className="info-item">服务热线：13801258830 </a>
                    <a className="info-item">联系人： 张先生</a>
                    <a className="info-item">邮箱：L.ZHANG@weda.de</a>
                </div>
                <span>
                    <img src={info} width="130" height="130" className="contact-info"/>
                </span>
            </div>
        );
    }
};