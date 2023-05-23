import { Image } from "../helpers/getGifs";

export const GifItem = ({title, url}: Image) => {

    
  return (
    // <li key={id}>{title}</li>
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
