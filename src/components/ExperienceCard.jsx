import { experiences } from "../constants";

const ExperienceCard = ({ title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== experiences.length - 1 ? "mb-6" : "mb-0"
    } feature-card w-full border-blue border-2`}
  >
    <div className="flex-1 flex flex-col ml-3 py-4">
      <h4 className="font-outfit font-semibold text-white text-[18px] leading-[23.4px] mb-10">
        {`- ${title}`}
      </h4>
      <p className="font-outfit font-semibold text-white text-[18px] leading-[23.4px]">
        {`- ${content}`}
      </p>
    </div>
  </div>
);

export default ExperienceCard;
