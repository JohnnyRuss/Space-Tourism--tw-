import { FC } from "react";
import { useAppSelector } from "../../store/reducerHooks";
import { Heading, SubHeading, Text } from "../Layouts";

const Home: FC = () => {
  const { description, subTitle, title } = useAppSelector(
    (state) => state.home
  );

  return (
    <div className="desktop:bg-home-pattern-desktop phone:bg-home-pattern-tablet phone-small:bg-home-pattern-phone bg-cover bg-no-repeat">
      <div className="w-full max-w-container mx-auto min-h-screen flex desktop:flex-row phone-small:flex-col phone-small:items-center phone-small:justify-center phone-small:gap-20 overflow-x-hidden px-10">
        <div className="desktop:flex-1 flex tablet:justify-center phone-small:flex-col phone:ga-0 phone-small:gap-4">
          <SubHeading
            text={subTitle}
            className="uppercase text-app-h5 !text-app-violet animate-move-right phone-small:text-center desktop:text-start"
          />
          <Heading
            text={title}
            className="uppercase animate-move-rotate-90 origin-left phone-small:text-center desktop:text-start"
          />
          <Text
            text={description}
            className="text-lg desktop:w-2/3 !text-app-violet animate-move-top desktop:max-w-full phone-small:max-w-md desktop:text-start phone-small:text-center"
          />
        </div>
        <div className="desktop:flex-1 flex justify-center animate-move-left duration-1">
          <button className="desktop:w-72 phone-small:w-32 aspect-square rounded-full bg-app-white text-app-black uppercase animate-move-rotate-opp">
            explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
