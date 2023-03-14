import React, { PropsWithChildren } from "react";
import { Flex, useTheme } from "@uni-design-system/uni-react";

export const Page = ({ children }: PropsWithChildren) => {
  const { colors } = useTheme();

  return (
    <Flex
      style={{
        backgroundColor: colors.background,
        padding: "30px",
        height: "100% ",
        flexGrow: 1,
      }}
    >
      {children}
    </Flex>
  );
};
