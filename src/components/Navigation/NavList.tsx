import { FC, Dispatch, SetStateAction } from "react";
import { Link, useLocation } from "react-router-dom";

import useWindowDimention from "../../hooks/useWindowDimention";
import navRoutes from "../../lib/main-nav-routes.json";

interface NavListType {
  setOpenNav: Dispatch<SetStateAction<boolean>>;
  openNav: boolean;
}

const NavList: FC<NavListType> = ({ setOpenNav, openNav }) => {
  const { width } = useWindowDimention();
  const { pathname } = useLocation();

  return width > 500 || (width < 500 && openNav) ? (
    <nav
      onClick={() => setOpenNav(false)}
      className="desktop:w-1/2 phone:w-3/4 h-full backdrop-blur-sm bg-black/10 ml-auto phone-small:fixed phone-small:right-0 phone-small:top-0 phone-small:bottom-0 phone:relative phone-small:w-1/2"
    >
      <ul className="flex phone:flex-row phone-small:flex-col phone:justify-evenly phone:items-center phone:mt-0 phone-small:mt-10 h-full uppercase">
        {navRoutes.map((route, i) => (
          <Link
            to={route.path}
            className={`cursor-pointer tracking-2/5 phone:h-full phone:p-0 phone-small:p-2 flex items-center desktop:gap-3 phone:gap-2 ${
              pathname === route.path ? "border-b-2 border-b-app-white" : ""
            }`}
            key={route.id}
          >
            <span>0{i}</span>
            <span>{route.route}</span>
          </Link>
        ))}
      </ul>
    </nav>
  ) : null;
};

export default NavList;
