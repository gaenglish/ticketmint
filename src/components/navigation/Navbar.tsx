import React, { PropsWithChildren } from "react";
import { Flex, useTheme } from "@uni-design-system/uni-react";
import Logo from "../../assets/logo";

export const Navbar = ({ children }: PropsWithChildren) => {
  const { colors } = useTheme();

  return (
    <Flex align="center" style={{ backgroundColor: colors["surface-variant"] }}>
      <Flex grow={1} style={{ marginLeft: 40 }}>
        <Logo color={colors["on-background"]} />
      </Flex>

      <nav>
        <ul className="navbar-nav">{children}</ul>
      </nav>
    </Flex>
  );
};
