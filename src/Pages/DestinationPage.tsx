import { FC, useEffect } from "react";

import { useAppDipatch } from "../store/reducerHooks";
import { setDestinations } from "../store/reducers/destinationReducer";
import { DestinationType } from "../Interface/types";

import Destination from "../components/Destination/Destination";

const DestinationPage: FC = () => {
  const dispatch = useAppDipatch();

  useEffect(() => {
    async function getData() {
      const data = await (await fetch("/data.json")).json();
      const destinations: DestinationType[] = data.destinations;
      dispatch(setDestinations(destinations));
    }
    
    getData();
  }, [dispatch]);

  return <Destination />;
};

export default DestinationPage;
