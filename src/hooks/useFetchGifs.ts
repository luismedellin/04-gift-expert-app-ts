import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category: string) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getImages = async () => {
      const images = await getGifs(category);
      setImages(images);
      setIsLoading(false);
    };

    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
