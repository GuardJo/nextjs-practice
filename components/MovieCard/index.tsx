"use client";

import { useRouter } from "next/navigation";
import styles from "./MovieCard.module.css";

import Link from "next/link"

interface IMovieCardProps {
    title: string,
    id: string,
    poster_path: string,
};

export default ({ title, id, poster_path }: IMovieCardProps) => {
    const router = useRouter();
    const movieDetailUrl = `/movies/${id}`;

    const onClickPoster = () => {
        router.push(movieDetailUrl);
    };

    return (
        <div className={styles.movieCard}>
            <img src={poster_path} alt={title} onClick={() => onClickPoster()} />
            <Link href={movieDetailUrl}>{title}</Link>
        </div>
    );
}