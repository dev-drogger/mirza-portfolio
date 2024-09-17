import { useEffect, useRef } from "react";
import useFade from "./useFade";

const useImageCarousel = (
  ImageLength,
  startCarousel,
  setCurrentImage,
  currentProject
) => {
  const intervalIdRef = useRef(null);
  const { fade, setFade } = useFade();

  useEffect(() => {
    if (!startCarousel) return;

    const timer = setTimeout(() => {
      setFade({ opacity: 0 });
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % ImageLength);
        setFade({ opacity: 1 });
        const newIntervalId = setInterval(() => {
          setFade({ opacity: 0 });
          setTimeout(() => {
            setCurrentImage((prev) => (prev + 1) % ImageLength);
            setFade({ opacity: 1 });
          }, 1000);
        }, 4000);
        intervalIdRef.current = newIntervalId;
      }, 1000);
    }, 4000);

    return () => {
      clearTimeout(timer);
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [
    ImageLength,
    setFade,
    startCarousel,
    currentProject,
    setCurrentImage,
    intervalIdRef,
  ]);

  return fade;
};

export default useImageCarousel;
