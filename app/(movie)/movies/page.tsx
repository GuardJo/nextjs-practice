import Link from "next/link";
import { getMovies } from "../../../service/MovieApiService";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Movie List',
};

export default async () => {
    const movies = await getMovies();

    return (
        <div>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </div>
    );
} 