import styles from './home.module.css'

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Home",
};

export default () => {
    return (
        <div className={styles.home}>
            <div>
                <h2>Next JS</h2>
            </div>
        </div>
    );
};