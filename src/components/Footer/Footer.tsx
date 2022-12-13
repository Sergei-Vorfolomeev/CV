import React from 'react';
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={styles.footerPage}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>Sergey Vorfolomeev</h2>
                </div>
                <div className={styles.icons}>
                    <div className={styles.iconItem}></div>
                    <div className={styles.iconItem}></div>
                    <div className={styles.iconItem}></div>
                    <div className={styles.iconItem}></div>
                </div>
                <span>© 2022. All rights reserved</span>
            </div>
        </div>
    );
};

