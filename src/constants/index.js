import {
  instagram,
  linkedin,
  whatsapp,
  img1,
  img2,
  img3,
  mm,
  dh,
  drive,
  github,
} from "../assets/icon";

export const landingCarousel = [
  {
    id: 1,
    image: img1,
  },
  {
    id: 2,
    image: img2,
  },
  {
    id: 3,
    image: img3,
  },
];

export const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "/about",
    title: "About",
  },
  {
    id: "/works",
    title: "Works",
  },
  {
    id: "/contact",
    title: "Contact",
  },
];

export const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

export const job = [
  {
    id: 1,
    logo: mm,
    company: "PT. Lifelong Learners (Multimatics)",
    position: "Video Maker Intern",
  },
  {
    id: 2,
    logo: dh,
    company: "PT. Dhaulagiri Indo Raya",
    position: "Creative Intern",
  },
  {
    id: 3,
    logo: "",
    company: "From Laugh to Love Movie",
    position: "PM, Director, and Video Editor",
  },
];

export const experiences = [
  {
    id: "feature-1",
    title: "Develop a new OKRs based content production framework",
    content: "Create a total of 97 videos for social media marketing campaigns",
  },
  {
    id: "feature-2",
    title:
      "Perform content research based on the company's product knowledge to create engaging and insightful social media content",
    content:
      "Conduct video and photo documentation of the company's daily operations, collaborate with other departments and client stakeholders in the content production process",
  },
  {
    id: "feature-3",
    title:
      "Manage and configure the cloud service database to provide a high availability of documentation data inquiry",
    content:
      "Perform post-production process using Adobe Premiere Pro, After Effects, and Photoshop to conduct video editing, sequencing, color grading, and visual effects",
  },
  {
    id: "feature-4",
    title: "Increase content production process by 50% more efficient",
    content: "Increase company YouTube channel viewers by 37%",
  },
  {
    id: "feature-5",
    title: "Increase company YouTube channel subscribers by 1.153 person",
    content: "Create 3 product marketing videos a week",
  },
  {
    id: "feature-6",
    title:
      "Responsible for pre-production, production, and post-production processes",
    content:
      "Analyze company YouTube channel performance metrics to conduct data-driven decision making",
  },
  {
    id: "feature-7",
    title: "Led team of 35 crew",
    content:
      "Planning, organizing, and maintaining production timeline and schedule",
  },
  {
    id: "feature-8",
    title:
      "Supervising and managing the team and all stages of the production process",
    content: "Conduct casting, reading, and blocking",
  },
  {
    id: "feature-9",
    title: "Create a floor plan, shot list, storyboard, and mood board",
    content: "Successfully sold 250 tickets for the screening",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    name: "Instagram",
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: linkedin,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/mirza-wahyu-9964131aa/",
  },
  {
    id: "social-media-3",
    icon: whatsapp,
    name: "Whatsapp",
    link: "https://wa.me/085156363125/",
  },
  {
    id: "social-media-4",
    icon: github,
    name: "GitHub",
    link: "https://github.com/dev-drogger",
  },
  {
    id: "social-media-5",
    icon: drive,
    name: "More Portfolio",
    link: "https://drive.google.com/drive/folders/1K6Krx1ZIWlaX2nQ1oCeKi9Iu5pl4eXDs?usp=drive_link",
  },
];
