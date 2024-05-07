import { Metadata } from "next";
import { getMovieDetail, getMovieVideos } from "../../../../service/MovieApiService";

export const metadata: Metadata = {
    title: 'Movie Details',
};

export default async (param: Parameter) => {
    const movieId = param.params.id;

    const [movieInfo, movieVideos] = await Promise.all([getMovieDetail(movieId), getMovieVideos(movieId)]);

    return (
        <div>
            <h2>{movieInfo.title}</h2>
            <h6>{JSON.stringify(movieVideos)}</h6>
        </div>
    );
}

interface Parameter {
    params: {
        id: string,
    }
};