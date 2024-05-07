import { Metadata } from "next";
import MovieInfo from "../../../../components/MovieInfo";
import MovieVideo from "../../../../components/MovieVideo";
import { Suspense } from "react";
import loading from "../../../loading";

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
                <MovieVideo id={movieId} />
            </Suspense>
        </div>
    );
}

interface Parameter {
    params: {
        id: string,
    }
};