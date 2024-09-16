import { useState, useMemo, useCallback } from "react";
import { images } from "../constants/outputArray";

export default function UsePhotoSets() {
  const [currentPhotoSet, setCurrentPhotoSet] = useState(0);
  const [currentImages, setCurrentImages] = useState(0);

  const photoSets = images;

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

  const changePhotoSet = useCallback((direction) => {
    setCurrentPhotoSet((prev) => {
      const newPhotoSet =
        direction === "next"
          ? (prev + 1) % photoSets.length
          : (prev - 1 + photoSets.length) % photoSets.length;
      setCurrentImages(0);
      return newPhotoSet;
    });
  }, []);

  const nextPhotoSet = useCallback(
    () => changePhotoSet("next"),
    [changePhotoSet]
  );
  const prevPhotoSet = useCallback(
    () => changePhotoSet("prev"),
    [changePhotoSet]
  );

  return {
    currentPhotoSet,
    currentImages,
    setCurrentImages,
    photosLength,
    currentPhotoSetMetadata,
    currentImagePath,
    currentFolderName,
    thumbnailPath,
    nextPhotoSet,
    prevPhotoSet,
  };
}
