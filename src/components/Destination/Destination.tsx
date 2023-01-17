import { FC, useState, useEffect } from "react";
import { useAppSelector } from "../../store/reducerHooks";
import { DestinationType } from "../../Interface/types";

import { Heading, Text, SectionHeading } from "../Layouts";
import DestinationFooter from "./DestinationFooter";
import DestinationNavList from "./DestinationNavList";
import DestinationFigure from "./DestinationFig";

const Destination: FC = () => {
  const { destinations } = useAppSelector((state) => state.destination);
  const [destination, setDestination] = useState<DestinationType | null>(null);

  function handleDestination(i: number) {
    setDestination(destinations[i]);
  }

  useEffect(() => {
    setDestination(destinations[0]);
  }, [destinations]);

  return (
    <div className="desktop:bg-destination-pattern-desktop phone:bg-destination-pattern-tablet phone-small:bg-destination-pattern-phone bg-cover bg-no-repeat">
      <div className="w-full max-w-container mx-auto min-h-screen flex desktop:flex-row phone-small:flex-col justify-between items-center desktop:gap-12 phone-small:gap-6 desktop:pt-0 pt-24 px-10">
        <div className="flex-1 flex flex-col">
          <SectionHeading num="01" title="pick your destination" />
          <DestinationFigure
            destinationImg={destination?.images.webp || ""}
            destinationName={destination?.name || ""}
          />
        </div>
        <div className="flex-1 flex flex-col desktop:items-start phone-small:items-center">
          <DestinationNavList
            destinations={destinations}
            destination={destination}
            handleDestination={handleDestination}
          />
          <Heading
            text={destination?.name || ""}
            className="uppercase animate-move-left desktop:mt-0 phone:mt-5"
          />
          <Text
            text={destination?.description || ""}
            className="phone:max-w-md text-app-small leading-8 text-app-violet animate-move-bottom desktop:text-start phone-small:text-center h-36"
          />
          <DestinationFooter
            distance={destination?.distance || ""}
            travel={destination?.travel || ""}
          />
        </div>
      </div>
    </div>
  );
};

export default Destination;
