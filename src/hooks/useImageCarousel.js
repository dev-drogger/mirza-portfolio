import { useEffect, useRef } from "react";
import { useSpring } from "@react-spring/web";

const useImageCarousel = (
  ImageLength,
  setCurrentImage,
  currentProject,
  loading
) => {
  const intervalIdRef = useRef(null);
  const [fade, setFade] = useSpring(() => ({
    opacity: 1,
    config: { duration: 1000 },
  }));

  useEffect(() => {
    if (loading) return;

    const startCarouselFunction = () => {
      clearInterval(intervalIdRef.current);

      setTimeout(() => {
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
      }, 6500);
    };

    const timer = startCarouselFunction();

    return () => {
      clearTimeout(timer);
      clearInterval(intervalIdRef.current);
    };
  }, [ImageLength, setFade, loading, currentProject, setCurrentImage]);

  useEffect(() => {
    intervalIdRef.current;
  }, [currentProject, setCurrentImage]);

  return fade;
};

export default useImageCarousel;
