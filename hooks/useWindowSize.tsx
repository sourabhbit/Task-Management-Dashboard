import { useEffect, useState } from "react";
import { WindowResizeType } from "@/types/hooks";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowResizeType>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};
