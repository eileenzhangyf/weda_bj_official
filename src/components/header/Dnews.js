import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './Dvideo.css';
  
export function Dnews() {
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
          <a className="intro">新闻中心</a>
        </Dropdown.Toggle>
        <Dropdown.Menu className="menu">
          <Dropdown.Item 
          className="d-item" href="#">
            <a className="spec" onClick={() => window.location.replace("/#news")}>公司新闻</a>
          </Dropdown.Item>
         {/* <Dropdown.Item className="d-item" href="#">
            <a className="spec">行业新闻</a>
      </Dropdown.Item>*/}
      </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}