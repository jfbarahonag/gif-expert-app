import { useState } from "react";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dead pool', 'Dragon ball']);

  return (
    <>
      {/* title */}
      <div>GifExpertApp</div>
      {/* input */}

      {/* GIF list */}
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
