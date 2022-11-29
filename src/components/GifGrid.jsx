import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

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
      <ol>
        {
          gifs.map( ({ id, title, url }) => (
            <li key={id}>
              <h2>{ title }</h2>
              <img src={url} alt="" />
            </li>
          ))
        }
      </ol>
    </>
  )
}
