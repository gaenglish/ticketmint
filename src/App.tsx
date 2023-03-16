import "./index.css";

import React from "react";
import { Navbar, NavItem } from "./components/navigation";
import { DropdownMenu } from "./components/navigation/DropdownMenu";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

const App = () => {
  return (
    <>
      <Navbar>
        <NavItem to="/wallet" iconName="wallet" />
        <NavItem to="/alerts" iconName="bell" />
        <NavItem to="/chat" iconName="chatBubbleLeftRight" />

        <NavItem iconName="chevronDown">
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
