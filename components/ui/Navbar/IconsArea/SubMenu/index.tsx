"use client";
import { useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";
import Menu from "../../../../common/Menu";
import SocialIcons, { IconImage } from "../SocialIcons";
import SubMenuWrapper from "./SubMenuWrapper";
import { useOnClickOutside } from "usehooks-ts";

function SubMenu() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSocialMenu, setShowSocialMenu] = useState(false);
  const ref = useRef(null);

  const handleClickOutsideSocialSubMenu = () => {
    setShowSocialMenu(false);
    setShowMobileMenu(false);
  };
  useOnClickOutside(ref, handleClickOutsideSocialSubMenu);

  const subMenuIcons = [
    {
      id: 0,
      icon: IoShareSocialOutline,
      handleClick: () => setShowSocialMenu((showSocialMenu) => !showSocialMenu),
      label: "social-icon",
    },
    {
      id: 1,
      icon: FiMenu,
      handleClick: () => setShowMobileMenu((showMobileMenu) => !showMobileMenu),
      label: "menu-icon",
    },
  ];

  return (
    <div className=" flex gap-6" ref={ref}>
      {subMenuIcons.map((i) => {
        return (
          <div
            className="flex lg:hidden items-center justify-center hover:scale-125 transition duration-200 text-3xl font-extrabold "
            onClick={() => i.handleClick()}
            key={i.id}
          >
            <IconImage iconImage={i.icon} label={i.label} />
          </div>
        );
      })}

      {showMobileMenu ? (
        <SubMenuWrapper content={<Menu variant="col" />} />
      ) : null}
      {showSocialMenu ? (
        <SubMenuWrapper content={<SocialIcons variant="submenu" />} />
      ) : null}
    </div>
  );
}

export default SubMenu;
