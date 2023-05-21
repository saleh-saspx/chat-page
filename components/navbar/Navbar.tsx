import React from "react";
import Score from "./Score";
import NavbarTab from "./NavbarTab";
import Profile from "./Profile";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <nav className="w-[95%] h-[72px] relative rounded-full p-4 flex justify-between items-center mx-auto bg-white dark:bg-primary-dark">
      <div className="flex justify-between gap-6 items-center">
        <Profile />
        <Score />
      </div>

      <Logo />
      <NavbarTab />
      <Menu />
    </nav>
  );
};
export default Navbar;
