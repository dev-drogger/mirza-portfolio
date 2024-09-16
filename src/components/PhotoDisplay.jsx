function PhotoDisplay({ imagePath, altText, animation }) {
  return (
    <div id="image" className="relative flex w-full h-full">
      {imagePath ? (
        <img
          src={imagePath}
          alt={altText}
          loading="lazy"
          className={`object-cover w-full h-full ${animation}`}
        />
      ) : (
        <p className="text-white">Image not found</p>
      )}
      <div className="absolute inset-0 bg-gradient-to-r max-sm:bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
    </div>
  );
}

export default PhotoDisplay;
