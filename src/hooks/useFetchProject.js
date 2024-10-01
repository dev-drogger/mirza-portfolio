const fetchProject = async (query) => {
  try {
    const response = await fetch(
      `https://li75f2i9ha.execute-api.ap-southeast-1.amazonaws.com/dev/Project?ProjectName=${query}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch project");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(`Failed: ${err.message}`);
  }
};

export default fetchProject;
