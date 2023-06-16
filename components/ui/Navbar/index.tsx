import React, { useMemo } from "react";
import Logo from "./Logo";
import Menu from "../../common/Menu";
import SocialIcons from "./IconsArea/SocialIcons";
import IconsArea from "./IconsArea";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 right-0 bg-slate-100 flex justify-between items-center px-[5%] h-[80px] lg:h-[100px]">
      <Logo />
      <Menu variant="row" />
      <IconsArea />
    </div>
  );
};

export default React.memo(Navbar);
