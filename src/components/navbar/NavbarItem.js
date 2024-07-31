import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NavbarItem = ({ title, icon, url }) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => navigate(url), [navigate, url]);

  return (
    <div
      className="flex flex-col w-[60px] h-full justify-center align-middle hover:cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex justify-center">{icon}</div>
      <div className="flex justify-center">
        <span className="text-zinc-400 text-[11px]">{title}</span>
      </div>
    </div>
  );
};

export default NavbarItem;
