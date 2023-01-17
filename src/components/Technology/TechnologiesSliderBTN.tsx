import { FC } from "react";
import { TechnologyType } from "../../Interface/types";

interface TechnologiesSliderBTNType {
  technologies: TechnologyType[];
  handleTech: (i: number) => void;
  activeTech: TechnologyType | null;
}

const TechnologiesSliderBTN: FC<TechnologiesSliderBTNType> = ({
  technologies,
  handleTech,
  activeTech,
}) => {
  return (
    <div className="flex desktop:flex-col desktop:self-auto phone-small:flex-row  phone-small:self-center gap-8">
      {technologies?.map((tech, i) => (
        <button
          onClick={() => handleTech(i)}
          className={`desktop-large:w-20 desktop-large:h-20 phone-small:w-10 phone-small:h-10 aspect-square rounded-full border-2 border-gray-600 animate-move-top animate-delay-${
            i * 200
          } ${
            tech.id === activeTech?.id
              ? "bg-app-white text-app-black"
              : "text-app-white"
          }`}
          key={`detailed-tech--item__btn--${tech.id}`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default TechnologiesSliderBTN;
