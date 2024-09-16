import { experiences } from "../constants";

const ExperienceCard = ({ title, content, index }) => (
  <div
    className={`flex flex-row max-sm:flex-col items-center justify-center p-6 rounded-[20px] max-sm:w-[300px] ${
      index !== experiences.length - 1 ? "mb-6" : "mb-0"
    } feature-card w-full border-blue border-2`}
  >
    <div className="flex-1 flex flex-col items-center justify-center py-4">
      <div className="flex flex-row w-full h-full items-center justify-start mb-10 max-sm:mb-6">
        <li className="text-white"></li>
        <p className="font-outfit font-semibold text-white max-sm:text-[14px] text-[18px] leading-[23.4px]">
          {title}
        </p>
      </div>

      <div className="flex flex-row w-full items-center justify-start mb-10 max-sm:mb-6">
        <li className="text-white"></li>
        <p className="font-outfit font-semibold text-white max-sm:text-[14px] text-[18px] leading-[23.4px]">
          {content}
        </p>
      </div>
    </div>
  </div>
);

export default ExperienceCard;
