import { FC } from "react";

interface HeadingType {
  text: string;
  className?: string;
}

const Heading: FC<HeadingType> = ({ text, className }) => {
  return (
    <h1
      className={`desktop:text-app-h1 tablet:text-app-h2 phone:text-app-h3 phone-small:text-app-h4 text-app-white font-serif ${className}`}
    >
      {/* desktop-large:text-app-h1 */}
      {text}
    </h1>
  );
};

export default Heading;
