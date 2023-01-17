import { FC } from "react";
import { DestinationType } from "../../Interface/types";

interface DestinationNavListType {
  destinations: DestinationType[];
  destination: DestinationType | null;
  handleDestination: (i: number) => void;
}

const DestinationNavList: FC<DestinationNavListType> = ({
  destinations,
  destination,
  handleDestination,
}) => {
  return (
    <nav className="mt-7">
      <ul className="uppercase flex gap-9">
        {destinations?.map((dest, i) => (
          <li
            onClick={() => handleDestination(i)}
            className={`cursor-pointer text-base tracking-2/5 leading-8 ${
              destination?.id === dest.id
                ? "text-app-white border-b-2 border-b-app-white"
                : "text-app-violet"
            }`}
            key={`destination--${dest.id}`}
          >
            {dest.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DestinationNavList;
