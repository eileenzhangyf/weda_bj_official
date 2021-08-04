import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './Dvideo.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  BrowserRouter,
  Link
} from 'react-router-dom';
  
export function Dvideo() {
  const [menuOpen,toggleMenuOpen]=useState(false);
  return (
    <div style={{  
                  width: 180, 
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
          <a className="intro">视频中心</a>
        </Dropdown.Toggle>
        <Dropdown.Menu className="menu">
          <Dropdown.Item 
          className="d-item" href="#">
            <a className="spec" onClick={() => window.location.replace("/#vplayer")}>唯达养猪设备</a>
          </Dropdown.Item>
          <Dropdown.Item className="d-item" href="#">
            <a className="spec"><Link to="/group" className="spec">猪群管理</Link></a>
          </Dropdown.Item>
          <Dropdown.Item className="d-item" href="#">
            <a className="spec"><Link to="/nutrix" className="spec">仔猪补奶系统Nutrix</Link></a>
          </Dropdown.Item>
          <Dropdown.Item className="d-item" href="#">
            <a className="spec"><Link to="/wind" className="spec">唯达通风系统</Link></a>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}