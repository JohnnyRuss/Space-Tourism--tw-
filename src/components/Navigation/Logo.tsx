import { FC } from "react";

const Logo: FC = () => {
  return (
    <figure className="desktop-large:translate-x-14 phone:translate-x-7 phone:mt-0 phone-small:mt-3 phone:ml-0 phone-small:ml-2">
      <img src="./assets/shared/logo.svg" alt="logo" />
    </figure>
  );
};

export default Logo;
