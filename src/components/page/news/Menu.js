import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
//import {Dropdown} from 'react-bootstrap';

export const Menu = ()=> {
  //const [isOpen, updateIsOpen] = useState(false);
  const [menuOpen,toggleMenuOpen]=useState(false);
  return (
    //<Dropdown
      //{...props}
     // onMouseOver={() => updateIsOpen(true)}
      //onFocus={() => updateIsOpen(true)}
      //onMouseLeave={() => updateIsOpen(false)}
      //onBlur={() => updateIsOpen(false)}
      //toggle={() => updateIsOpen(!isOpen)}
      //isOpen={isOpen}
    //>
    <Dropdown
      onMouseEnter={() => {
        toggleMenuOpen(true);
      }}
      onMouseLeave={() => {
        toggleMenuOpen(false);
      }}
      show={menuOpen}
    >
    <Dropdown.Toggle className="item-header">
      Header
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item className="m-item">contact</Dropdown.Item>
      <Dropdown.Item className="m-item">call</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
  );
}