import { useState } from "react";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dead pool', 'Dragon ball']);

  const onAddCategory = () => {
    const categoryTitle = 'New category';
    setCategories(prevCategories => [...prevCategories, categoryTitle]);
  }

  return (
    <>
      {/* title */}
      <h1>GifExpertApp</h1>
      {/* input */}

      {/* GIF list */}
      <button
        onClick={onAddCategory}
      >
        Agregar categoría
      </button>
      <ol>
        {categories.map((category, index) => (
          <li key={index}>
            {category}
          </li>
        ))}
      </ol>
      {/* GIF Item */}
    </>
  )
}
