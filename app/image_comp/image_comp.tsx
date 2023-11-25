const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_API_KEY;
console.log("Access Key:", accessKey);

const apiUrl = "https://api.unsplash.com";

async function fetchFashionImages() {
  try {
    const response = await fetch(
      `${apiUrl}/search/photos?query=clothing&per_page=30`,
      {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }

    const data = await response.json();
    return data.results; // Return the image data
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
}

export default fetchFashionImages;
