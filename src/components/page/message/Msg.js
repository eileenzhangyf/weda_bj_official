import React from 'react';
import './Msg.css';
import {InputForm} from './InputForm';
import profession from './professional.png';
import help from './helping-hand-icon-17.jpg';
import service from './service-call.png';


export class Msg extends React.Component{
    render(){
        return(
            <div className="messages" id="message">
               {/* <h1>立即咨询</h1>*/}
                <div className="msg-body">
                    <div className="form"><InputForm/></div>
                    <div className="msg-text">
                        <h2>唯达优势</h2>
                        <div className="msg-logos">
                            <img src={profession} width="100" className="msg-img"/>
                            <img src={help} width="100" className="msg-img"/>
                            <img src={service} width="100" className="msg-img"/>
                        </div>
                        <ul>
                            <li><a>拥有多项技术专利，产品覆盖全球50多个国家和地区。</a></li>
                            <li><a>完善的售前售后服务，为用户量身定制，每一套系统独一无二。</a></li>
                            <li><a>德国原装进口，智能养猪设备，80多年专注于养猪。</a></li>
                            <li><a>计算机控制，全自动按需饲喂，高精确度，低人工成本。</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};