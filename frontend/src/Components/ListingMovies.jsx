import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function ListingMovies({ setMovie, movie, setInput, input }) {
    const navigate = useNavigate()

    const [favori, setFavori] = useState([]);

    function handleChange(e) {
        setInput(e.target.value)
    }
    function handelClick() {
        axios.get("https://api.themoviedb.org/3/search/movie?api_key=a8bb9980efd4d285e65c1874324f444e&query=" + input)
            .then(response => {
                setMovie(response.data.results)
            })
    }
    function handleDoubleClick(m) {
        axios.post("http://localhost:3005/movies",
            {
                "title": m.original_title,
                "year": m.date,
                "url": m.poster_path
            })
            .then(res=>console.log(res) , 
            navigate("/favori")           
            )
            .catch(err=>console.log(err))
    }

    return (
        <div className="flex flex-col items-center ">
            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="flex space-x-11 mb-3">

                <input type="search" onChange={(e) => handleChange(e)} id="search" class="block  p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                <button onClick={handelClick} type="button" class="text-white  bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-4  ">Search</button>

            </div>
            {/* <h1>The movie selected</h1> */}
            <div className='grid grid-cols-4 gap-4 mx-40 mt-7'>
                {movie.map((m) => {
                    if (m.poster_path === null) {
                        return null; // Skip this element
                    }
                    return (
                        <div key={m.id}>
                            <img
                                className="rounded-xl cursor-pointer h-[450px]" onDoubleClick={() => handleDoubleClick(m)}
                                src={"https://image.tmdb.org/t/p/w500" + m.poster_path}
                                alt={m.original_title}
                            />
                            <h2 className="text-center">{m.original_title}</h2>
                        </div>
                    );
                })}

            </div>
        </div>)
}