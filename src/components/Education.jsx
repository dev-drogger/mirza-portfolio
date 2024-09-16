import styles from "../constants/style";
import { lsprlogo } from "../assets/icon";

function Education() {
  return (
    <div
      className={`flex-1 flex-col mb-[350px] xl:px-0 sm:px-16 mx-[100px] max-sm:mx-0 max-sm:mb-0 max-sm:w-[100vw] max-sm:h-[40vh]`}
    >
      <div className="flex-1 flex flex-row max-sm:flex-col gap-32 max-sm:gap-10 max-sm:w-[100vw] items-center justify-center">
        <img
          loading="lazy"
          src={lsprlogo}
          alt="logo"
          className="w-[200px] h-[200px]"
        />
        <div className="flex flex-col max-sm:text-center">
          <h2
            className={`${styles.heading2} max-sm:text-[30px] max-sm:leading-[3rem]`}
          >
            London School of <br className="block" /> Public Relations Jakarta
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Public Relations and <br className="sm:hidden block" />
            Digital Communication Major
          </p>

          <div className="absolute z-[3] w-[50%] h-[50%] rounded-full white__gradient" />
        </div>
      </div>
    </div>
  );
}

export default Education;
