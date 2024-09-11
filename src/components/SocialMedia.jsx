import { socialMedia } from "../constants";

const SocialMediaLink = ({ link, isLast }) => (
  <a
    className={`flex items-center justify-center p-6 rounded-[20px] ${
      isLast ? "mb-0" : "mb-6"
    } feature-card w-full border-blue border-2`}
    href={link.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="size-[20%] flex items-center justify-center">
      <div className="w-[64px] h-[64px] rounded-full bg-dimBlue flex items-center justify-center ">
        <img
          loading="lazy"
          src={link.icon}
          alt={`${link.name} icon`}
          className="w-[50%] h-[50%] object-contain m-auto"
        />
      </div>
    </div>
    <div className="size-[20%] flex items-center justify-start">
      <h4 className="font-outfit font-bold text-white text-[18px] leading-[23.4px]">
        {link.name}
      </h4>
    </div>
  </a>
);

const SocialMedia = () => (
  <div className="flex flex-col items-center justify-center">
    {socialMedia.map((link, index) => (
      <SocialMediaLink
        key={link.id}
        link={link}
        isLast={index === socialMedia.length - 1}
      />
    ))}
  </div>
);

export default SocialMedia;
