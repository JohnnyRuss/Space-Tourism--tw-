import { useEffect, FC } from "react";

import { useAppDipatch } from "../store/reducerHooks";
import { setHomeData } from "../store/reducers/homeRecucer";

import { HomeType } from "../Interface/types";

import Home from "../components/Home/Home";

const HomePage: FC = () => {
  const dispatch = useAppDipatch();

  useEffect(() => {
    async function getData() {
      const data = await (await fetch("/data.json")).json();
      const home: HomeType = data.home;
      dispatch(setHomeData(home));
    }

    getData();
  }, [dispatch]);

  return <Home />;
};

export default HomePage;
