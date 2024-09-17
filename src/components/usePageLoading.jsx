import { useEffect, useState } from "react";
import { useSpring } from "@react-spring/web";

function usePageLoading() {
  const [loading, setLoading] = useState(true);
  const [startCarousel, setStartCarousel] = useState(false);
  const [pageAnimation, setPageAnimation] = useSpring(() => ({
    opacity: 0,
    config: { duration: 1500 },
  }));

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
      setPageAnimation({ opacity: 1 });
      setStartCarousel(true);
    }, 3000);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, [setPageAnimation]);

  return { loading, startCarousel, pageAnimation, setPageAnimation };
}

export default usePageLoading;
