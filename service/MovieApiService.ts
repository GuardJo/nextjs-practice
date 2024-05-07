const MOVIES_API = 'https://nomad-movies.nomadcoders.workers.dev/movies';

// TLS 사설 인증 허가
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export async function getMovies() {
    // Loading Component Test 용
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(MOVIES_API);

    return response.json();
}

export async function getMovieDetail(id: string) {
    // Loading Component Test 용
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${MOVIES_API}/${id}`);
    return response.json();
}

export async function getMovieVideos(id: string) {
    // Loading Component Test 용
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${MOVIES_API}/${id}/videos`);
    return response.json();
}