import { useState } from "react"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  console.log(categories);

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* input */}

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
