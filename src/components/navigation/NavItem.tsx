import React, { PropsWithChildren, ReactNode, useState } from "react";
import { Link, To, useMatch, useResolvedPath } from "react-router-dom";

interface NavItemProps {
  to?: To;
  icon: ReactNode;
}

export const NavItem = ({
  to,
  icon,
  children,
}: PropsWithChildren<NavItemProps>) => {
  const resolvedPath = useResolvedPath(to || "/");
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      {to ? (
        <Link to={to} className="icon-button">
          {icon}
        </Link>
      ) : (
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {icon}
        </a>
      )}

      {open && children}
    </li>
  );
};
