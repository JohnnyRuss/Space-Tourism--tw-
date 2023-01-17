import { FC } from "react";

interface DestinationFigureType {
  destinationName: string;
  destinationImg: string;
}

const DestinationFigure: FC<DestinationFigureType> = ({
  destinationName,
  destinationImg,
}) => {
  return (
    <figure className="desktop-large:w-96 desktop:w-64 phone-small:w-300 aspect-square self-center justify-self-flex-center phone:mt-20 phone-small:mt-10 animate-move-right">
      <img
        className="w-full object-contain object-center"
        src={destinationImg}
        alt={destinationName}
      />
    </figure>
  );
};

export default DestinationFigure;
