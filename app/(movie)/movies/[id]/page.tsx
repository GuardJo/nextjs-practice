import { Metadata } from "next";
import { getMovieDetail, getMovieVideos } from "../../../../service/MovieApiService";

export const metadata: Metadata = {
    title: 'Movie Details',
};

export default async (param: Parameter) => {
    const movieId = param.params.id;

    const movieInfo = await getMovieDetail(movieId);
    const movieVideos = await getMovieVideos(movieId);

    return (
        <div>
            <h2>{movieInfo.title}</h2>
        </div>
    );
}

interface Parameter {
    params: {
        id: string,
    }
};