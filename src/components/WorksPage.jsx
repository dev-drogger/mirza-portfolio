import React, {
  useEffect,
  Suspense,
  useState,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { images } from "../constants/outputArray";
import { NavBar, LibraryCard, Loading } from "./";
import PhotoDisplay from "./PhotoDisplay";
import { useSpring, animated } from "@react-spring/web"; // Add this import

const photoSets = images;
const LazyPhotos = React.lazy(() => import("./Photos"));

const MemoizedPhotoDisplay = React.memo(PhotoDisplay);
const MemoizedLibraryCard = React.memo(LibraryCard);

function WorksPage() {
  const [currentImages, setCurrentImages] = useState(0);
  const [currentPhotoSet, setCurrentPhotoSet] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [pageTransition, setPageTransition] = useState("fade-in");
  const [loading, setLoading] = useState(true);
  const intervalIdRef = useRef(null);

  const photosLength = useMemo(
    () => photoSets[currentPhotoSet].metadata.length,
    [currentPhotoSet]
  );

  const currentPhotoSetMetadata = useMemo(
    () => photoSets[currentPhotoSet].metadata,
    [currentPhotoSet]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const newIntervalId = setInterval(() => {
      setOpacity(0); // Start fade out
      setTimeout(() => {
        setCurrentImages((prev) => (prev + 1) % photosLength);
        setOpacity(1); // Start fade in
      }, 1000);
    }, 4000);
    intervalIdRef.current = newIntervalId;
    return () => clearInterval(newIntervalId);
  }, [photosLength]);

  useEffect(() => {
    const img = new Image();
    img.src = currentPhotoSetMetadata[currentImages].path;
  }, [currentImages, currentPhotoSetMetadata]);

  const changePhotoSet = useCallback(
    (direction) => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
      setPageTransition("fade-out bg-primary");
      setTimeout(() => {
        setCurrentPhotoSet((prev) => {
          const newPhotoSet =
            direction === "next"
              ? (prev + 1) % photoSets.length
              : (prev - 1 + photoSets.length) % photoSets.length;
          setCurrentImages(0);
          return newPhotoSet;
        });
        setPageTransition("fade-in bg-primary");
      }, 1500);
    },
    [photoSets.length]
  );

  const nextPhotoSet = useCallback(
    () => changePhotoSet("next"),
    [changePhotoSet]
  );
  const prevPhotoSet = useCallback(
    () => changePhotoSet("prev"),
    [changePhotoSet]
  );

  const fadeProps = useSpring({ opacity: opacity });

  return (
    <>
      <NavBar />
      {loading ? (
        <Loading />
      ) : (
        <div className="w-[100vw] h-[100vh] bg-primary z-30">
          <div>
            <div className="flex w-[100vw] h-[100vh]">
              <div
                id="title"
                className={`flex pl-[170px] ${pageTransition} font-outfit font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] justify-start items-center w-[50%] h-full bg-primary`}
              >
                {photoSets[currentPhotoSet].folder}
              </div>
              <animated.div style={fadeProps} className="w-[50%]">
                <MemoizedPhotoDisplay
                  imagePath={currentPhotoSetMetadata[currentImages].path}
                  altText={currentImages + 1}
                />
              </animated.div>
              <div className="absolute flex items-end justify-end">
                <MemoizedLibraryCard
                  setNext={nextPhotoSet}
                  setPrev={prevPhotoSet}
                  thumbnail={photoSets[currentPhotoSet].metadata[0].path}
                  length={photoSets.length}
                />
              </div>
            </div>

            <Suspense fallback={<div>Loading...</div>}>
              <LazyPhotos
                currentLibrary={currentPhotoSetMetadata}
                currentImage={currentPhotoSetMetadata[0].path}
              />
            </Suspense>

            <div className="absolute z-[3] -left-1/2 top-0 w-[30%] h-[30%] rounded-full white__gradient" />
            <div className="absolute z-[0] w-[30%] h-[30%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          </div>
        </div>
      )}
    </>
  );
}

export default React.memo(WorksPage);
