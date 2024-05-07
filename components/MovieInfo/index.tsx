import styles from "./MovieInfo.module.css";

import Link from "next/link";
import { getMovieDetail } from "../../service/MovieApiService"

export default async ({ id }: { id: string }) => {
    const movieInfo = await getMovieDetail(id);

    return (
        <div className={styles.container}>
            <img src={movieInfo.poster_path} alt={movieInfo.title} className={styles.poster} />
            <div className={styles.info}>
                <h2>{movieInfo.title}</h2>
                <h3>⭐{movieInfo.vote_average.toFixed(2)}</h3>
                <p>{movieInfo.overview}</p>
                {movieInfo.homepage === '' ? '' : <Link href={movieInfo.homepage} target={"_blank"}>Homepage 가기</Link>}
            </div>
        </div>
    )
}