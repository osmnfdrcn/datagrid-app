"use client";
import React, { useState } from "react";
import { iconsList, Icon } from "./iconsList";
import { IconType } from "react-icons";

type SocialIconsType = {
  variant?: "submenu";
};
const SocialIcons = ({ variant }: SocialIconsType) => {
  return (
    <div
      className={` ${
        variant ? null : "hidden"
      } lg:flex items-center justify-center gap-8`}
    >
      <div className="flex flex-col  lg:flex-row gap-6 w-full items-center lg:gap-4 text-xl font-light text-slate-400">
        {iconsList.map((i: Icon) => (
          <IconImage iconImage={i.icon} key={i.id} label="social-icon" />
        ))}
      </div>
    </div>
  );
};
export default React.memo(SocialIcons);

export const IconImage = (props: { iconImage: IconType; label?: string }) => {
  return (
    <button className="hover:text-slate-700" aria-label={props.label}>
      {props.iconImage && <props.iconImage />}
    </button>
  );
};
