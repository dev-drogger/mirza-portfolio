import { useState, useEffect, useRef } from "react";

function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);
    const curr = ref.current;
    if (ref.current) {
      observer.observe(curr);
    }

    return () => {
      if (curr) {
        observer.unobserve(curr);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
}

export default useIntersectionObserver;
