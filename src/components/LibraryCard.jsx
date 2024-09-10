import Carousel from "./Carousel";

const LibraryCard = ({ length, setPrev, setNext }) => {
  const cards = [...new Array(length)].map((_, index) => ({
    index: index,
  }));

  return (
    <div className="card-carousel">
      <Carousel cards={cards} setNext={setNext} setPrev={setPrev} />
    </div>
  );
};

export default LibraryCard;
