import React, { PropsWithChildren } from "react";
import { Flex, useTheme } from "@uni-design-system/uni-react";
import Logo from "../../assets/logo";

export const Navbar = ({ children }: PropsWithChildren) => {
  const { colors } = useTheme();

  return (
    <Flex align="center">
      <Logo color={colors["on-background"]} />
      <nav
        className="navbar"
        style={{ backgroundColor: colors["surface-variant"] }}
      >
        <ul className="navbar-nav">{children}</ul>
      </nav>
    </Flex>
  );
};
