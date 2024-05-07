import MovieInfo from "../../../../components/MovieInfo";
import { Suspense } from "react";
import loading from "../../../loading";
import MovieVideos from "../../../../components/MovieVideos";
import { getMovieDetail } from "../../../../service/MovieApiService";

export async function generateMetadata({ params: { id } }: IParameter) {
    const movie = await getMovieDetail(id);
    return {
        title: movie.title,
    };
}

export default ({ params: { id } }: IParameter) => {
    return (
        <div>
            <Suspense fallback={loading()}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={loading()}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}

interface IParameter {
    params: {
        id: string,
    }
};