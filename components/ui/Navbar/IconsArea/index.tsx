import React, { useState } from "react";
import SocialIcons from "./SocialIcons";
import SubMenu from "./SubMenu";

type Props = {};

const IconsArea = (props: Props) => {
  return (
    <div className="flex items-center justify-end gap-4">
      <SocialIcons />
      <SubMenu />
    </div>
  );
};

export default IconsArea;
