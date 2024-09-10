import { images } from "../constants/outputArray";

const Card = ({ index }) => (
  <div className="card absolute ">
    <img
      src={images[index % images.length].metadata[0].path}
      alt=""
      className="size-full object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 "></div>
  </div>
);

export default Card;
