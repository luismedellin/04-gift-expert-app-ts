import { useState, useEffect } from "react";
import { getGifs, Image } from "../helpers/getGifs";

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
      <ol>
        {
            images.map(({id, title}: Image) => (
            <>
                <li key={id}>{title}</li> 
            </>
            ))
        }
      </ol>
    </>
  );
};
