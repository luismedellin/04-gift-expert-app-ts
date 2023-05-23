import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = () => {
    setCategories([ 'Pokemon', ...categories])
    // setCategories(c=> ['Pokemon',  ...c ])
  }

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        <AddCategory />
        <button onClick={onAddCategory}>Agregar</button>


        {/* listado de Gif */}
        <ol>
          {
            categories.map(category => (<li key={category}>{category}</li>))
          }
        </ol>
          {/* gif item */}
    </>
  )
}
