import Link from "next/link";

const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

// TLS 사설 인증 허가
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function getMovies() {
    // Loading Component Test 용
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(URL);

    return response.json();
}

export default async function MovieListPage() {
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