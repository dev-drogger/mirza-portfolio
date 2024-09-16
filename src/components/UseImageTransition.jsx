import { useEffect, useRef } from "react";
import { useSpring } from "@react-spring/web";

export default function UseImageTransition(
  photosLength,
  shouldStartTransition,
  currentPhotoSet,
  setCurrentImages
) {
  const [fadeProps, setFadeProps] = useSpring(() => ({
    opacity: 1,
    config: { duration: 1000 },
  }));

  const intervalIdRef = useRef(null);

  useEffect(() => {
    if (!shouldStartTransition) return;

    const timer = setTimeout(() => {
      setFadeProps({ opacity: 0 });
      setTimeout(() => {
        setCurrentImages((prev) => (prev + 1) % photosLength);
        setFadeProps({ opacity: 1 });
        const newIntervalId = setInterval(() => {
          setFadeProps({ opacity: 0 });
          setTimeout(() => {
            setCurrentImages((prev) => (prev + 1) % photosLength);
            setFadeProps({ opacity: 1 });
          }, 1000);
        }, 4000);
        intervalIdRef.current = newIntervalId;
      }, 1000);
    }, 1750);

    return () => {
      clearTimeout(timer);
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [
    photosLength,
    setFadeProps,
    shouldStartTransition,
    currentPhotoSet,
    setCurrentImages,
  ]);

  return fadeProps;
}
