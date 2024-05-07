
import styles from "./movies.module.css";

import MovieCard from "../../../components/MovieCard";
import { getMovies } from "../../../service/MovieApiService";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Movie List',
};

export default async () => {
    const movies = await getMovies();

    return (
        <div className={styles.movies}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
            ))}
        </div>
    );
} 