import styles from "../constants/style";
import { arrowUp } from "../assets/icon";

function GetStartedButton() {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full border-blue-gradient border-2 p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary/25 w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-outfit font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>

          <img
            src={arrowUp}
            loading="lazy"
            alt="arrow"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>

        <p className="font-outfit font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
}

export default GetStartedButton;
