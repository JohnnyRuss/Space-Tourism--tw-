import { FC } from "react";
import { Text, SubHeading } from ".";

interface SectionHeadingType {
  num: string;
  title: string;
  className?: string;
}

const SectionHeading: FC<SectionHeadingType> = ({ num, title, className }) => {
  return (
    <div
      className={`flex flex-col items-center phone:justify-start phone-small:justify-center desktop-large:gap-7 phone-small:gap-4 ${className}`}
    >
      <Text
        text={num}
        className="desktop-large:text-app-h3 desktop:text-app-h4 phone:text-app-h5 phone-small:text-xl !text-gray-600 font-bold"
      />
      <SubHeading text={title} className="uppercase tracking-4/5 text-center" />
    </div>
  );
};

export default SectionHeading;
