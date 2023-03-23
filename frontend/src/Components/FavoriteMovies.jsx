import { useState } from "react"
import axios from 'axios'
export function FavoriteMovies() {
    
    const [movie, setMovie] = useState([]);

        axios.get("http://localhost:3005/movies")
            .then(response => {
                setMovie(response.data)
            })
    
    return (
        
        <div>
                        <h1 className="my-8 ml-8 font-extrabold text-3xl">My List</h1>

            <div className='grid grid-cols-4 gap-4 mx-40 mt-7'>
                {movie.map((mv) => {
                    console.log(mv.title);
                    return (
                        <div key={mv.id}>
                            <img className="rounded-xl  cursor-pointer h-[400px]"
                                src={"https://image.tmdb.org/t/p/w500" + mv.url}
                                alt={mv.original_title}
                            />
                            <h2 className="text-center">{mv.title}</h2>
                        </div>)
                })}
            </div>
        </div>)
}