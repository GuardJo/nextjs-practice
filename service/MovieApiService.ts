const MOVIES_API = 'https://nomad-movies.nomadcoders.workers.dev/movies';

// TLS 사설 인증 허가
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export async function getMovies() {
    const response = await fetch(MOVIES_API);

    return response.json();
}

export async function getMovieDetail(id: string) {
    const response = await fetch(`${MOVIES_API}/${id}`);
    return response.json();
}

export async function getMovieVideos(id: string) {
    const response = await fetch(`${MOVIES_API}/${id}/videos`);
    return response.json();
}