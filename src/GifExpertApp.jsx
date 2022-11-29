import { AddCategory } from "./components/AddCategory";
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
      <ol>
        {
          categories.map((category) => (
            <div key={category}>
              <h3>{category}</h3>
              <li>
                {category}
              </li>
            </div>
          ))
        }
      </ol>
      {/* GIF Item */}
    </>
  )
}
