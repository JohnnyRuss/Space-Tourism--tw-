import React from "react";

interface SubHeadingType {
  text: string;
  className?: string;
}

const SubHeading: React.FC<SubHeadingType> = ({ text, className }) => {
  return (
    <h3
      className={`desktop:text-app-h3 phone:text-app-h5 text-app-white ${className}`}
    >
      {/* desktop-large:text-app-h3  */}
      {text}
    </h3>
  );
};

export default SubHeading;
