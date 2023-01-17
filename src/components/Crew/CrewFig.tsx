import { FC } from "react";
import { CrewType, DirectionXType } from "../../Interface/types";

interface CrewFigType {
  crew: CrewType[];
  activeMember: CrewType | null;
  animateDirection: DirectionXType;
}

const CrewFig: FC<CrewFigType> = ({ crew, activeMember, animateDirection }) => {
  return (
    <>
      {crew.map((member) => (
        <figure
          key={`crew-member-fig-${member.id}`}
          className={`self-stretch flex-1 flex justify-center items-end ${
            member.id === activeMember?.id
              ? `block animate-move-${animateDirection}`
              : "hidden"
          }`}
        >
          <img src={activeMember?.images.webp} alt="" className="object-contain"/>
        </figure>
      ))}
    </>
  );
};

export default CrewFig;
