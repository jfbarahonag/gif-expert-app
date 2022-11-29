import { AddCategory, GifGrid } from './components';
import { useState } from "react";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dead pool', 'Dragon ball']);

  const onAddCategory = (newCategory = 'New category') => {

    // newCategory is retrived cleaned (trimmed)
    if (categories.includes(newCategory)) return;

    setCategories(prevCategories => [newCategory, ...prevCategories]);
  }

  return (
    <>
      {/* title */}
      <h1>GifExpertApp</h1>
      {/* input */}
      <AddCategory
        onNewCategory={onAddCategory}
      />
      {/* GIF list */}
      <button
        onClick={() => onAddCategory()}
      >
        Agregar categoría
      </button>
      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }
      {/* GIF Item */}
    </>
  )
}
