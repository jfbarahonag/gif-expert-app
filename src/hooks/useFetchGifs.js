import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
  
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const getGifsObjects = async () => {
    const gifObjects = await getGifs(category);
    setGifs(gifObjects);
    setIsLoading(false);
  }

  useEffect( ()=> {
    getGifsObjects();
  }, []);
  
  return {
    gifs,
    isLoading,
  }  
}
