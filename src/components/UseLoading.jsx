import { useState, useEffect } from "react";

export default function useLoading() {
  const [loading, setLoading] = useState(true);
  const [shouldStartTransition, setShouldStartTransition] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    setShouldStartTransition(false);
    const transitionTimer = setTimeout(() => {
      setShouldStartTransition(true);
    }, 4750);

    return () => {
      clearTimeout(transitionTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  return { loading, shouldStartTransition };
}
