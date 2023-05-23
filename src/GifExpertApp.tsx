import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = (newCategory: string) => {
    if(categories.includes(newCategory)) return;

    setCategories(categories => [ newCategory, ...categories])
    // setCategories(c=> ['Pokemon',  ...c ])
  }

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        <AddCategory 
          onNewCategory={onAddCategory}
        />
        {/* <button onClick={onAddCategory}>Agregar</button> */}


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
