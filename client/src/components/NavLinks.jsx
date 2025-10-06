import React from 'react';

import { navlinks } from '../constants';
import NavLink from './NavLink';

const NavLinks = ({ isActive, setIsActive, setToggleDrawer }) => {
  return (
    <ul className="mb-4">
      {navlinks.map((link) => (
        <NavLink
          key={link.name}
          link={link}
          isActive={isActive}
          setIsActive={setIsActive}
          setToggleDrawer={setToggleDrawer}
        />
      ))}
    </ul>
  );
};

export default NavLinks;