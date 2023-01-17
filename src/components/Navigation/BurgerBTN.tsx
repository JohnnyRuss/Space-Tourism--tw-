import { FC, Dispatch, SetStateAction } from "react";

interface BurgerBTNType {
  setOpenNav: Dispatch<SetStateAction<boolean>>;
  openNav: boolean;
}

const BurgerBTN: FC<BurgerBTNType> = ({ setOpenNav, openNav }) => {
  return (
    <button
      onClick={() => setOpenNav((prev) => !prev)}
      className="absolute right-4 top-4 z-20 phone:hidden phone-small:block"
    >
      {!openNav && (
        <img src="./assets/shared/icon-hamburger.svg" alt="burger button" />
      )}
      {openNav && (
        <img src="./assets/shared/icon-close.svg" alt="burger button" />
      )}
    </button>
  );
};

export default BurgerBTN;
