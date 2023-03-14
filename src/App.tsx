import "./index.css";
import { Icon, useTheme } from "@uni-design-system/uni-react";

import React from "react";
import { Navbar, NavItem } from "./components/navigation";
import { DropdownMenu } from "./components/navigation/DropdownMenu";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import Logo from "./assets/logo";

const App = () => {
  const { colors } = useTheme();

  return (
    <>
      <Navbar>
        <NavItem
          to="/wallet"
          icon={<Icon color="on-surface" name="wallet" />}
        />
        <NavItem to="/alerts" icon={<Icon name="bell" />} />
        <NavItem to="/chat" icon={<Icon name="chatBubbleLeftRight" />} />

        <NavItem icon={<Icon name="chevronDown" />}>
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
