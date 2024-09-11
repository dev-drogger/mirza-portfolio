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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const [fadeProps, setFadeProps] = useSpring(() => ({
    opacity: 1,
    config: { duration: 1000 },
  }));

  useEffect(() => {
    const newIntervalId = setInterval(() => {
      setFadeProps({ opacity: 0 });
      setTimeout(() => {
        setCurrentImages((prev) => (prev + 1) % photosLength);
        setFadeProps({ opacity: 1 });
      }, 1000);
    }, 4000);
    intervalIdRef.current = newIntervalId;
    return () => clearInterval(newIntervalId);
  }, [photosLength, setFadeProps]);

  useEffect(() => {
    const img = new Image();
    img.src = currentPhotoSetMetadata[currentImages].path;
  }, [currentImages, currentPhotoSetMetadata]);

  const setCurrentImagesCallback = useCallback(
    (prev) => (prev + 1) % photosLength,
    [photosLength]
  );

  const [pageTransitionProps, setPageTransitionProps] = useSpring(() => ({
    opacity: 1,
    config: { duration: 1500 },
  }));

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
    [photoSets.length, setPageTransitionProps]
  );

  const nextPhotoSet = useCallback(
    () => changePhotoSet("next"),
    [changePhotoSet]
  );
  const prevPhotoSet = useCallback(
    () => changePhotoSet("prev"),
    [changePhotoSet]
  );

  useEffect(() => {
    const newIntervalId = setInterval(() => {
      setFadeProps({ opacity: 0 });
      setTimeout(() => {
        setCurrentImages(setCurrentImagesCallback);
        setFadeProps({ opacity: 1 });
      }, 1000);
    }, 4000);
    intervalIdRef.current = newIntervalId;
    return () => clearInterval(newIntervalId);
  }, [photosLength, setCurrentImagesCallback, setFadeProps]);

  return (
    <>
      <NavBar />
      {loading ? (
        <Loading />
      ) : (
        <div className="w-[100vw] h-[100vh] bg-primary z-30">
          <div>
            <div className="flex w-[100vw] h-[100vh]">
              <animated.div
                id="title"
                style={pageTransitionProps}
                className={`flex pl-[170px] font-outfit font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] justify-start items-center w-[50%] h-full bg-primary`}
              >
                {currentFolderName}
              </animated.div>
              <animated.div style={fadeProps} className="w-[50%]">
                <MemoizedPhotoDisplay
                  imagePath={currentImagePath}
                  altText={currentImages + 1}
                />
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
