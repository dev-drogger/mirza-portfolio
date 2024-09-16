import { experiences } from "../constants";

const ExperienceCard = ({ title, content, index }) => (
  <div
    className={`flex flex-row max-sm:flex-col p-6 rounded-[20px] max-sm:w-[300px] ${
      index !== experiences.length - 1 ? "mb-6" : "mb-0"
    } feature-card w-full border-blue border-2`}
  >
    <div className="flex-1 flex flex-col ml-3 py-4">
      <h4 className="font-outfit font-semibold text-white max-sm:text-[14px] text-[18px] leading-[23.4px] mb-10 max-sm:mb-0">
        {`- ${title}`}
      </h4>
      <p className="font-outfit font-semibold text-white max-sm:text-[14px] text-[18px] leading-[23.4px]">
        {`- ${content}`}
      </p>
    </div>
  </div>
);

export default ExperienceCard;
