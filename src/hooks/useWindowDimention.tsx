import { useState, useEffect } from "react";

function getDimention(): { innerWidth: number } {
  const { innerWidth } = window;

  return { innerWidth };
}

const useWindowDimention = (): { width: number } => {
  const [width, setWidth] = useState<number>(getDimention().innerWidth);

  function handleResize() {
    setWidth(getDimention().innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [width]);

  return { width };
};

export default useWindowDimention;
