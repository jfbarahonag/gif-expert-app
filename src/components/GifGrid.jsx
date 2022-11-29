import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifCard } from "./GifCard";

export const GifGrid = ({ category }) => {

  const [gifs, setGifs] = useState([]);
  
  const getGifsObjects = async () => {
    const gifObjects = await getGifs(category);
    setGifs(gifObjects);
  }

  useEffect( ()=> {
    getGifsObjects();
  }, []);


  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {
          gifs.map( ( {id, ...content} ) => (
            <GifCard key={id}
              {...content}
            />
          ))
        }
      </div>
    </>
  )
}
