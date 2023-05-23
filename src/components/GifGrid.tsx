interface Props {
    category: string;
}

export const GifGrid = ({category}: Props) => {
  return (
    <>
        <h3>{category}</h3>
        <p>Hola mundo</p>
    </>
  )
}
