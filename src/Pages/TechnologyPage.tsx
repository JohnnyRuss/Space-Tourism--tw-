import { FC, useEffect } from "react";
import { useAppDipatch } from "../store/reducerHooks";
import { TechnologyType } from "../Interface/types";
import { setTechnologies } from "../store/reducers/technologyReducer";

import Technology from "../components/Technology/Technology";

const TechnologyPage: FC = () => {
  const dispatch = useAppDipatch();

  useEffect(() => {
    async function getData() {
      const data = await (await fetch("/data.json")).json();
      const technologies: TechnologyType[] = data.technology;
      dispatch(setTechnologies(technologies));
    }

    getData();
  }, [dispatch]);

  return <Technology />;
};

export default TechnologyPage;
