"use client";

type Image = {
  id: string;
  urls: {
    small: string; 
  };
  alt_description: string; 
};

import { useEffect, useState } from "react";
import fetchFashionImages from "../image_comp/image_comp";

export default function ProductPage() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    async function fetchImages() {
      const fetchedImages: Image[] = await fetchFashionImages();
      setImages(fetchedImages);
    }
    fetchImages();
  }, []);

  return (
    <div>
      <h1 className="text-center">products</h1>
      <div className="grid grid-cols-3 gap-5 place-items-center">
        {images.map((image: Image) => (
          <img className="object-cover"
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
          />
        ))}
      </div>
    </div>
  );
}
