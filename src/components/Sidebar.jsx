import React from "react";

import OrchardMain from "../icons/orchardMain.png";
import { DASHBOARD_SIDEBAR_LINKS } from "../constants/Navigation";
import { Link, NavLink } from "react-router-dom";

const linkClasses =
  "flex items-center gap-4 px-3 py-2 hover:bg-neutral-400 hover:no-underline  rounded-sm text-base";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-60 h-screen p-3 bg-neutral-200 text-neutral-800">
      <div className="flex items-center justify-center gap-5 font-semibold px-3 py-3 pb-10">
        <img src={OrchardMain} alt="" width="40" height="40" />
        <span className="text-lg">Plantaze</span>
      </div>

      <div className="flex-1 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      {/* <img src={Plum} alt="" /> */}
      <div className="">bottom part</div>
    </div>
  );
};

export default Sidebar;

function SidebarLink({ item }) {
  return (
    <>
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          isActive
            ? `${linkClasses} bg-neutral-400 text-neutral-200`
            : linkClasses
        }
      >
        <span className="text-xl">{item.icon}</span>
        <div className="">{item.label}</div>
      </NavLink>
      {item.last && <div className="border-b border-slate-400 p-1 mb-2"></div>}
    </>
  );
}
