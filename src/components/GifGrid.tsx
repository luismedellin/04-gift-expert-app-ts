import { useState, useEffect } from "react";
import { getGifs, Image } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

interface Props {
  category: string;
}

export const GifGrid = ({ category }: Props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async() => {
        const images = await getGifs(category);
        setImages(images);
    }

    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {
            images.map(img => (
            <>
                <GifItem key={img.id} {...img} />
            </>
            ))
        }
      </div>
    </>
  );
};
