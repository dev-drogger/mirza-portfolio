import React, {
  useEffect,
  Suspense,
  useState,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { images } from "../constants/outputArray";
import { NavBar, LibraryCard, Loading } from "../components";
import PhotoDisplay from "../components/PhotoDisplay";
import { useSpring, animated } from "@react-spring/web";

const photoSets = images;
const LazyPhotos = React.lazy(() => import("../components/Photos"));

const MemoizedPhotoDisplay = React.memo(PhotoDisplay);
const MemoizedLibraryCard = React.memo(LibraryCard);

function WorksPage() {
  const [currentImages, setCurrentImages] = useState(0);
  const [currentPhotoSet, setCurrentPhotoSet] = useState(0);
  const [loading, setLoading] = useState(true);
  const intervalIdRef = useRef(null);
  const [shouldStartTransition, setShouldStartTransition] = useState(false);

  const photosLength = useMemo(
    () => photoSets[currentPhotoSet].metadata.length,
    [currentPhotoSet]
  );

  const currentPhotoSetMetadata = useMemo(
    () => photoSets[currentPhotoSet].metadata,
    [currentPhotoSet]
  );

  const currentImagePath = useMemo(
    () => currentPhotoSetMetadata[currentImages].path,
    [currentPhotoSetMetadata, currentImages]
  );

  const currentFolderName = useMemo(
    () => photoSets[currentPhotoSet].folder,
    [currentPhotoSet]
  );

  const thumbnailPath = useMemo(
    () => photoSets[currentPhotoSet].metadata[0].path,
    [currentPhotoSet]
  );

  const [fadeProps, setFadeProps] = useSpring(() => ({
    opacity: 1,
    config: { duration: 1000 },
  }));

  const [pageTransitionProps, setPageTransitionProps] = useSpring(() => ({
    opacity: 0,
    config: { duration: 1500 },
  }));

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
      setPageTransitionProps({ opacity: 1 });
    }, 3000);

    setShouldStartTransition(false);
    const transitionTimer = setTimeout(() => {
      setShouldStartTransition(true);
    }, 4750);

    return () => {
      clearTimeout(transitionTimer);
      clearTimeout(loadingTimer);
    };
  }, [currentPhotoSet, setPageTransitionProps]);

  useEffect(() => {
    if (!shouldStartTransition) return;

    const timer = setTimeout(() => {
      setLoading(false);
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
  }, [photosLength, setFadeProps, shouldStartTransition, currentPhotoSet]);

  useEffect(() => {
    const img = new Image();
    img.src = currentPhotoSetMetadata[currentImages].path;
  }, [currentImages, currentPhotoSetMetadata]);

  const changePhotoSet = useCallback(
    (direction) => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
      setPageTransitionProps({ opacity: 0 });
      setTimeout(() => {
        setCurrentPhotoSet((prev) => {
          const newPhotoSet =
            direction === "next"
              ? (prev + 1) % photoSets.length
              : (prev - 1 + photoSets.length) % photoSets.length;
          setCurrentImages(0);
          return newPhotoSet;
        });
        setPageTransitionProps({ opacity: 1 });
      }, 1500);
    },
    [setPageTransitionProps]
  );

  const nextPhotoSet = useCallback(
    () => changePhotoSet("next"),
    [changePhotoSet]
  );
  const prevPhotoSet = useCallback(
    () => changePhotoSet("prev"),
    [changePhotoSet]
  );

  return (
    <>
      <NavBar />
      {loading ? (
        <Loading />
      ) : (
        <div className="w-[100vw] h-[100vh] bg-primary z-30">
          <div>
            <div className="flex w-[100vw] h-[100vh]">
              <animated.div id="parent" style={pageTransitionProps}>
                <div
                  id="title"
                  className={`flex z-30 pl-[170px] font-outfit font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] justify-start items-center w-[650px] h-full bg-primary`}
                >
                  {currentFolderName}
                </div>
                <animated.div
                  style={fadeProps}
                  className="w-[50%] absolute top-0 right-0 h-full"
                >
                  <MemoizedPhotoDisplay
                    imagePath={currentImagePath}
                    altText={`Image ${currentImages + 1}`}
                  />
                </animated.div>
              </animated.div>

              <div className="absolute flex items-end justify-end">
                <MemoizedLibraryCard
                  setNext={nextPhotoSet}
                  setPrev={prevPhotoSet}
                  thumbnail={thumbnailPath}
                  length={photoSets.length}
                />
              </div>
            </div>

            <Suspense>
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
