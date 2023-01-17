import { FC } from "react";
import { CrewType, DirectionXType } from "../../Interface/types";

import { SubHeading, Heading, Text } from "../Layouts";

interface CrewDetailedItemType {
  id: string;
  activeMember: CrewType | null;
  animateDirection: DirectionXType;
}

const CrewDetailedItem: FC<CrewDetailedItemType> = ({
  id,
  activeMember,
  animateDirection,
}) => {
  return (
    <div
      className={`items-center flex-col desktop:h-96 phone:h-60 phone-small:h-max ${
        id === activeMember?.id
          ? `desktop:block phone-small:flex animate-move-${animateDirection}`
          : "hidden"
      }`}
    >
      <SubHeading
        text={activeMember?.role || ""}
        className="font-serif uppercase phone-small:!text-app-h5 !text-gray-600 "
      />
      <Heading
        text={activeMember?.name || ""}
        className="desktop-large:!text-app-h3 phone:!text-app-h4 phone-small:!text-app-h5 uppercase mt-4 text-center phone:text-start"
      />
      <Text
        text={activeMember?.bio || ""}
        className="!text-app-violet mt-7 phone-small:max-w-md desktop:text-start phone-small:text-center"
      />
    </div>
  );
};

export default CrewDetailedItem;
