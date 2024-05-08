import styles from "./about.module.css"

import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About',
};

export default () => {
    return (
        <div className={styles.about}>
            <h1>About...</h1>
        </div>
    );
}