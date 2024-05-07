import { getMovieVideos } from "../service/MovieApiService"

export default async ({ id }: { id: string }) => {
    const movieVideos = await getMovieVideos(id);

    return (
        <h6>{JSON.stringify(movieVideos)}</h6>
    );
}