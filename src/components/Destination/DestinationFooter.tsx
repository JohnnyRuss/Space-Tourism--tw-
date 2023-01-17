import { FC } from "react";

interface DestinationType {
  distance: string;
  travel: string;
}

const DestinationFooter: FC<DestinationType> = ({ distance, travel }) => {
  return (
    <div className="flex gap-20 w-full phone-small:justify-between phone-small:max-w-md desktop-large:mt-14 phone-small:mt-9 pt-7 border-t-2 border-app-white animate-move-top">
      <div>
        <p className="uppercase text-app-violet text-app-sub-h2">
          AVG. DISTANCE
        </p>
        <p className="uppercase text-app-h5 tracking-2/5">{distance}</p>
      </div>
      <div>
        <p className="uppercase text-app-violet text-app-sub-h2">
          Est. travel time
        </p>
        <p className="uppercase text-app-h5 tracking-2/5">{travel}</p>
      </div>
    </div>
  );
};

export default DestinationFooter;
