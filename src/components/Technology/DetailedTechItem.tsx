import { FC } from "react";
import { Text, Heading } from "../Layouts";

import {
  TechnologyType,
  DirectionYType,
  DirectionXType,
} from "../../Interface/types";

interface DetailedTechItemType {
  id: string;
  activeTech: TechnologyType | null;
  animateDirection: DirectionYType | DirectionXType;
}

const DetailedTechItem: FC<DetailedTechItemType> = ({
  id,
  activeTech,
  animateDirection,
}) => {
  return (
    <div
      className={`${
        id === activeTech?.id
          ? `block animate-move-${animateDirection}`
          : "hidden"
      }`}
    >
      <Heading
        text={activeTech?.name || ""}
        className="desktop-large:!text-app-h3 phone-small:!text-app-h4 uppercase"
      />
      <Text
        text={activeTech?.description || ""}
        className="!text-app-violet mt-4 phone-small:max-w-md phone:px-0 phone-small:px-3"
      />
    </div>
  );
};

export default DetailedTechItem;
