import { getMovieDetail } from "../service/MovieApiService"

export default async ({ id }: { id: string }) => {
    const movieInfo = await getMovieDetail(id);

    return (
        <h2>{movieInfo.title}</h2>
    )
}