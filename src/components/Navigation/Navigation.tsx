import { FC, useState } from "react";
import BurgerBTN from "./BurgerBTN";
import NavList from "./NavList";
import Logo from "./Logo";

const Navigation: FC = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  return (
    <div className="fixed z-10 desktop:top-8 phone:top-1 text-app-white w-full flex items-center desktop-large:h-24 phone:h-14">
      <Logo />
      <hr className="phone:hidden desktop:block desktop:w-2/5 desktop:translate-x-20 relative z-[1]" />
      <BurgerBTN openNav={openNav} setOpenNav={setOpenNav} />
      <NavList openNav={openNav} setOpenNav={setOpenNav} />
    </div>
  );
};

export default Navigation;
