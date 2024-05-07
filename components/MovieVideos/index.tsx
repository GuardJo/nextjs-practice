import styles from "./MovieVideos.module.css"

import { getMovieVideos } from "../../service/MovieApiService"

export default async ({ id }: { id: string }) => {
    const movieVideos = await getMovieVideos(id);

    return (
        <div className={styles.container}>
            {movieVideos.map(video => (
                <iframe
                    key={video.id}
                    src={`https://youtube.com/embed/${video.key}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen title={video.name}
                />
            ))}
        </div>
    );
}