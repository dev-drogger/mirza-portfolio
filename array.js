import fs from "fs";
import path from "path";

const folders = [
  "./public/portfolio-library/BNC Development Training",
  "./public/portfolio-library/ETC",
  "./public/portfolio-library/LSPR SAGA 2023",
  "./public/portfolio-library/Multimatics Appreciation Day",
  "./public/portfolio-library/Personal Project",
  "./public/portfolio-library/Rikhana Boutique Catalogue",
  "./public/portfolio-library/Telkomsel Development Training",
];

function generateArrayFromFolder(folderPath) {
  const files = fs.readdirSync(folderPath);

  return files.map((file, index) => {
    return {
      id: index + 1,
      image: "img" + index,
      path: path
        .join(folderPath, file)
        .replace(/\\/g, "/")
        .replace("public/", ""),
    };
  });
}

const imagesArray = folders.map((folder) => {
  return {
    folder: path.basename(folder),
    metadata: generateArrayFromFolder(folder),
  };
});

function stringifyValue(key, value) {
  if (key === "folder" || key === "path" || key === "image") {
    return `"${value}"`;
  }
  if (typeof value === "string") {
    return value;
  }
  return JSON.stringify(value);
}

function stringifyObject(obj) {
  const entries = Object.entries(obj).map(([key, value]) => {
    return `${key}: ${stringifyValue(key, value)}`;
  });
  return `{\n    ${entries.join(",\n    ")}\n  }`;
}

let arrayString = `export const images = [\n${imagesArray
  .map((item) => {
    const metadataString = item.metadata.map(stringifyObject).join(",\n    ");
    return `  {\n    folder: "${item.folder}",\n    metadata: [\n    ${metadataString}\n    ]\n  }`;
  })
  .join(",\n")}\n];`;

fs.writeFileSync("outputArray.js", arrayString, "utf-8");

console.log("Array generated and stored in outputArray.js");
