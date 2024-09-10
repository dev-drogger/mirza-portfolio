import useIntersectionObserver from "./useIntersectionObserver";

function PhotoCard({ imgURL, changeLandingImage, landingImage }) {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      {isIntersecting && (
        <div
          className={`flex border-2 justify-center items-center rounded-xl py-1 ${
            landingImage === imgURL ? "border-coral-red" : "border-transparent"
          } cursor-pointer max-sm:flex-1`}
          onClick={changeLandingImage}
        >
          <img
            loading="lazy"
            src={imgURL}
            alt="image"
            width={350}
            height={103}
            className="object-contain flex overflow-hidden sm:w-52 sm:h-52"
          />
        </div>
      )}
    </div>
  );
}

export default PhotoCard;
