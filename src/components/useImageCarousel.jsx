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

    const startCarouselFunction = () => {
      setFade({ opacity: 0 });
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % ImageLength);
        setFade({ opacity: 1 });
        intervalIdRef.current = setInterval(() => {
          setFade({ opacity: 0 });
          setTimeout(() => {
            setCurrentImage((prev) => (prev + 1) % ImageLength);
            setFade({ opacity: 1 });
          }, 1000);
        }, 4000);
      }, 1000);
    };

    const timer = setTimeout(startCarouselFunction, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(intervalIdRef.current);
    };
  }, [ImageLength, setFade, startCarousel, currentProject, setCurrentImage]);

  useEffect(() => {
    intervalIdRef.current;
  }, [currentProject, setCurrentImage]);

  return fade;
};

export default useImageCarousel;
