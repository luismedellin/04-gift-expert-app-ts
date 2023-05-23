import { useState } from "react"

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

        {/* input */}
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
