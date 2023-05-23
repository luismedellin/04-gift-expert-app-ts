import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { Image } from "../helpers/getGifs";

interface Props {
  category: string;
}

export const GifGrid = ({ category }: Props) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && <h2>Loading...</h2>
      }
      <div className="card-grid">
        {images.map((img: Image) => (
          <>
            <GifItem key={img.id} { ...img } />
          </>
        ))}
      </div>
    </>
  );
};
