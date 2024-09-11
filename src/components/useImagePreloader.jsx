import { useState, useEffect } from "react";

export function useImagePreloader(imageUrls) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const preloadImages = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const imagePromises = imageUrls.map((url) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = resolve;
            img.onerror = reject;
          });
        });

        await Promise.all(imagePromises);

        if (isMounted) {
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
          setIsLoading(false);
        }
      }
    };

    preloadImages();

    return () => {
      isMounted = false;
    };
  }, [imageUrls]);

  return { isLoading, error };
}

export default useImagePreloader;
