import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavLink = ({ link, isActive, setIsActive, setToggleDrawer }) => {
  const navigate = useNavigate();

  return (
    <li
      className={`flex p-4 ${
        isActive === link.name && "bg-[#3a3a43]"
      }`}
      onClick={() => {
        setIsActive(link.name);
        if (setToggleDrawer) setToggleDrawer(false);
        navigate(link.link);
      }}
    >
      <img
        src={link.imgUrl}
        alt={link.name}
        className={`w-[24px] h-[24px] object-contain ${
          isActive === link.name ? "grayscale-0" : "grayscale"
        }`}
      />
      <p
        className={`ml-[20px] font-epilogue font-semibold text-[14px] ${
          isActive === link.name ? "text-[#1dc071]" : "text-[#808191]"
        }`}
      >
        {link.name}
      </p>
    </li>
  );
};

export default NavLink;
