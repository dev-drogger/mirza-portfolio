import useIntersectionObserver from "../hooks/useIntersectionObserver.js";

function ImageGallery({ imgURL, changeLandingImage, landingImage }) {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      {isIntersecting && (
        <div
          className={`flex border-2 justify-center items-center rounded-xl ${
            landingImage === imgURL ? "border-coral-red" : "border-transparent"
          } cursor-pointer max-sm:flex-1 overflow-hidden`}
          onClick={changeLandingImage}
        >
          <img
            loading="lazy"
            src={imgURL}
            alt="image"
            width={350}
            height={103}
            className="object-cover max-sm:h-[100px] flex overflow-hidden sm:w-52 sm:h-52"
          />
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
