import { Metadata } from "next";
import MovieInfo from "../../../../components/MovieInfo";
import { Suspense } from "react";
import loading from "../../../loading";
import MovieVideos from "../../../../components/MovieVideos";

export const metadata: Metadata = {
    title: 'Movie Details',
};

export default (param: Parameter) => {
    const movieId = param.params.id;

    return (
        <div>
            <Suspense fallback={loading()}>
                <MovieInfo id={movieId} />
            </Suspense>
            <Suspense fallback={loading()}>
                <MovieVideos id={movieId} />
            </Suspense>
        </div>
    );
}

interface Parameter {
    params: {
        id: string,
    }
};