import React, { PropsWithChildren, useState } from "react";
import { To, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { Button, IconName } from "@uni-design-system/uni-react";

interface NavItemProps {
  to?: To;
  iconName?: IconName;
}

export const NavItem = ({
  to,
  iconName,
  children,
}: PropsWithChildren<NavItemProps>) => {
  const resolvedPath = useResolvedPath(to || "/");
  const navigate = useNavigate();
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      {to ? (
        <Button
          buttonType="icon"
          iconName={iconName}
          onClick={() => navigate(to)}
        />
      ) : (
        <Button
          buttonType="icon"
          iconName={iconName}
          onClick={() => setOpen(!open)}
        />
      )}

      {open && children}
    </li>
  );
};
