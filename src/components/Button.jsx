import { Link } from "react-router-dom";

function Button({ title, path }) {
  return (
    <Link to={path}>
      <button
        type="button"
        className={`py-4 px-6 mb-7 bg-blue-gradient font-outfit cursor-pointer font-medium text-[18px] text-primary outline-none mt-10 rounded-[10px]`}
      >
        {title}
      </button>
    </Link>
  );
}

export default Button;
