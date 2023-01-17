import { FC } from "react";
import { CrewType } from "../../Interface/types";

interface CrewSliderBTNType {
  handleSlide: (i: number) => void;
  crew: CrewType[];
  activeMemberId: string;
}

const CrewSliderBTN: FC<CrewSliderBTNType> = ({
  handleSlide,
  crew,
  activeMemberId,
}) => {
  return (
    <div className="flex desktop:items-start phone-small:items-center desktop:self-auto phone-small:self-center gap-6">
      {crew.map((member, i) => (
        <button
          onClick={() => handleSlide(i)}
          className={`w-4 h-4 apect-square rounded-full animate-move-right animate-delay-${
            i * 200
          } ${
            member.id === activeMemberId ? "bg-app-white" : "bg-gray-600"
          }`}
          key={`crew-slider--btn---${i}`}
        ></button>
      ))}
    </div>
  );
};

export default CrewSliderBTN;
