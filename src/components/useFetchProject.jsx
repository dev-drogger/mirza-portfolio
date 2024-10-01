export const fetchProject = async (query) => {
  try {
    const response = await fetch(
      `https://li75f2i9ha.execute-api.ap-southeast-1.amazonaws.com/dev/Project?ProjectName=${query}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const preload = (project) => {
  const promises = project.map(({ url }) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        console.log(`successfully preload ${url}`);
        resolve(url);
      };
    });
  });
  console.log(Promise.all(promises));
  return Promise.all(promises);
};
