import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText, Button
} from 'reactstrap';
import Job from '../Recruitment/Job';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavbarText>Logo</NavbarText>
            <Job/>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        <NavItem><div class="dropdown">
            <button class="dropbtn">Messages</button>
            <div class="dropdown-content">
            <a href="#">Inbox</a>
            <a href="#">Sent</a>
            <a href="#">Drafts</a>
            <a href="#">Sent</a>
            <a href="#">Trash</a>
            </div>
            </div></NavItem>
      </Navbar>
      
    </div>
  );
}

export default Example;