import { FC, useEffect } from "react";
import { useAppDipatch } from "../store/reducerHooks";
import { CrewType } from "../Interface/types";
import { setCrewData } from "../store/reducers/crewReducer";

import Crew from "../components/Crew/Crew";

const CrewPage: FC = () => {
  const dispatch = useAppDipatch();

  useEffect(() => {
    async function getData() {
      const data = await (await fetch("/data.json")).json();
      const crew: CrewType[] = data.crew;
      dispatch(setCrewData(crew));
    }

    getData();
  }, [dispatch]);
  return <Crew />;
};

export default CrewPage;
