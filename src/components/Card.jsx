const Card = ({ thumbnail }) => (
  <div className="card absolute ">
    <img
      src={thumbnail}
      alt=""
      className="size-full object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 "></div>
  </div>
);

export default Card;
