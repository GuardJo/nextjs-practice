import styles from './credits.module.css'

import { getMovieCredits } from "../../../../../service/MovieApiService"
import NotFoundImage from '../../../../../components/NotFoundImage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Credits',
}

export default async ({ params: { id } }: IParameters) => {
    const credits = await getMovieCredits(id);

    return (
        <>
            <div className={styles.title}>Credits</div>
            <div key={id} className={styles.container}>
                {credits.map(credit => (
                    <div key={credit.id} className={styles.creditCard}>
                        {(credit.profile_path === null) ? <NotFoundImage /> : <img src={credit.profile_path} alt='profile' />}
                        <h1>{credit.name}</h1>
                        <h1>({credit.character})</h1>
                    </div>
                ))}
            </div>
        </>
    )
}

interface IParameters {
    params: {
        id: string,
    },
};