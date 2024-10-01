const preloadImages = (project) => {
  const promises = project.map(({ url }) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        resolve(url);
      };
    });
  });
  return Promise.all(promises);
};

export default preloadImages;
