import styles from "./MovieCard.module.css";

import Link from "next/link"

interface IMovieCardProps {
    title: string,
    id: string,
    poster_path: string,
};

export default ({ title, id, poster_path }: IMovieCardProps) => {
    return (
        <div className={styles.movieCard}>
            <img src={poster_path} alt={title} />
            <Link href={`/movies/${id}`}>{title}</Link>
        </div>
    );
}