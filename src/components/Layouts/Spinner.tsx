import React from "react";

interface SpinnerType {}

const Spinner: React.FC<SpinnerType> = (props) => {
  return (
    <div className="fixed left-0 top-0 bottom-0 right-0 z-10 bg-app-black-tr flex justify-center items-center">
      <span className="w-16 h-16 aspect-square rounded-full bg-transparent border-solid border-4 border-app-violet border-b-transparent animate-rotate-360"></span>
    </div>
  );
};

export default Spinner;
