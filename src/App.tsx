import "./index.css";
import { Icon } from "@uni-design-system/uni-react";

import React, { useState, useEffect, useRef, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";

const App = () => {
  return (
    <Navbar>
      <NavItem icon={<Icon name="plus" />} />
      <NavItem icon={<Icon name="bell" />} />
      <NavItem icon={<Icon name="chatBubbleLeftRight" />} />

      <NavItem icon={<Icon name="chevronDown" />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
};

const Navbar = (props: { children: ReactNode }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
};

function NavItem(props: { icon: JSX.Element; children?: any }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(undefined);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-ignore
    setMenuHeight(dropdownRef?.current?.firstChild?.offsetHeight);
  }, []);

  function calcHeight(el: { offsetHeight: any }) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props: {
    goToMenu?: React.SetStateAction<string>;
    leftIcon?: JSX.Element;
    children: ReactNode;
    rightIcon?: JSX.Element;
  }) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<Icon name="adjustmentsHorizontal" />}
            rightIcon={<Icon name="adjustmentsHorizontal" />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon={<Icon name="calendarDays" />}
            rightIcon={<Icon name="adjustmentsHorizontal" />}
            goToMenu="animals"
          >
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            goToMenu="main"
            leftIcon={<Icon name="arrowSmallLeft" />}
          >
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<Icon name="bolt" />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<Icon name="bolt" />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<Icon name="bolt" />}>
            JavaScript
          </DropdownItem>
          <DropdownItem leftIcon={<Icon name="calendarDays" />}>
            Awesome!
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "animals"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            goToMenu="main"
            leftIcon={<Icon name="arrowSmallLeft" />}
          >
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<Icon name="calendarDays" />}>
            Kangaroo
          </DropdownItem>
          <DropdownItem leftIcon={<Icon name="calendarDays" />}>
            Frog
          </DropdownItem>
          <DropdownItem leftIcon={<Icon name="calendarDays" />}>
            Horse?
          </DropdownItem>
          <DropdownItem leftIcon={<Icon name="calendarDays" />}>
            Hedgehog
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
