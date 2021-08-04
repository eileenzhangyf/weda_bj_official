import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownItem } from 'reactstrap';
import './Test.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  BrowserRouter,
  Link
} from 'react-router-dom';
  
export function Test() {
  const [menuOpen,toggleMenuOpen]=useState(false);
  return (
    <div style={{  
                  width: 200, 
                  padding: 0 }}>
      {/*<h4>Dropdown Component</h4>*/}
      <Dropdown
        onMouseEnter={()=>{
            toggleMenuOpen(true);
        }}
        onMouseLeave={()=>{
            toggleMenuOpen(false);
        }}
        show={menuOpen}
        className="test"
      >
        <Dropdown.Toggle className="menu-top">
          <a className="intro">产品介绍</a>
        </Dropdown.Toggle>
        <Dropdown.Menu className="menu">
          <Dropdown.Item 
          className="d-item" href="#">
            <a className="spec"><Link to="/dry" className="spec">液态料饲喂系统</Link></a>
          </Dropdown.Item>
          <Dropdown.Item className="d-item" href="#">
            <a className="spec">无抗饲料发酵系统</a>
          </Dropdown.Item>
          <Dropdown.Item className="d-item" href="#">
            <a className="spec">仔猪补奶补料系统</a>
          </Dropdown.Item>
          <Dropdown.Item className="d-item" href="#">
            <a className="spec">母猪精准饲喂器</a>
          </Dropdown.Item>
          <Dropdown.Item className="d-item" href="#">
            <a className="spec"><Link to="/female" className="spec">母猪饲喂电子站</Link></a>
          </Dropdown.Item>
          <Dropdown.Item className="d-item" href="#">
            <a className="spec"><Link to="/liquid" className="spec">干料饲喂系统</Link></a>
          </Dropdown.Item>
          <Dropdown.Item className="d-item" href="#">
            <a className="spec"><Link to="/environment" className="spec">环境控制技术</Link></a>
          </Dropdown.Item>
          <Dropdown.Item className="d-item" href="#">
            <a className="spec"><Link to="/house" className="spec">圈舍设备</Link></a>
          </Dropdown.Item>
          <Dropdown.Item className="d-item" href="#">
            <a className="spec">粪污处理</a>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}