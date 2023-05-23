import { getGifs } from "../helpers/getGifs";

interface Props {
  category: string;
}

export const GifGrid = ({ category }: Props) => {
    
  getGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <p>Hola mundo</p>
    </>
  );
};
