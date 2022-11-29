import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifCard } from "./GifCard";

export const GifGrid = ({ category }) => {

  const { gifs, isLoading } = useFetchGifs(category);

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
