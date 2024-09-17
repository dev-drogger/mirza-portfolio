import Carousel from "./Carousel";

const LibraryCard = ({ length }) => {
  const cards = [...new Array(length)].map((_, index) => ({
    index: index,
  }));

  return (
    <div className="card-carousel">
      <Carousel cards={cards} />
    </div>
  );
};

export default LibraryCard;
