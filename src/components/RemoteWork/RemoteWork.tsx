import React from 'react';
import styles from './RemoteWork.module.css'

export const RemoteWork = () => {
    return (
        <div className={styles.remoteWorkPage}>
            <div className={styles.container}>
                <h2 className={styles.title}>Consider remote work</h2>
                <button>Employ me</button>
            </div>
        </div>
    );
};

