const API_KEY = "AIzaSyDjsk-wTBDsAlFQ0aCOMTqHyGN5ZZoFhAA"; // Replace with your API key
const FOLDER_ID = "1IUXphdovW6T8x4AoLeUt4CgIdQnKZhpE"; // Replace with the public folder ID

export async function fetchProject() {
  let response;
  try {
    // Fetch the subfolders in the specified folder
    response = await fetch(
      `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}' in parents and mimeType='application/vnd.google-apps.folder'&key=${API_KEY}&fields=files(id,name,webViewLink)`
    );
    const driveData = await response.json();

    // Prepare an array to hold the folder details
    const foldersWithFiles = await Promise.all(
      driveData.files.map(async (folder) => {
        // Fetch the files within each subfolder
        const filesResponse = await fetch(
          `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}' in parents&key=${API_KEY}&fields=files(id,name,webViewLink)`
        );
        const filesData = await filesResponse.json();

        // Return the folder object including its files
        return {
          id: folder.id,
          name: folder.name,
          path: folder.webViewLink,
          metadata: filesData.files,
        };
      })
    );
    console.log(foldersWithFiles);
    return foldersWithFiles;
  } catch (err) {
    err.message;
    return [];
  }
}
