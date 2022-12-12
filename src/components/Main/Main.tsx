import React from 'react';
import styles from './Main.module.css'
import avatar from '../../img/photo.jpg'

export const Main = () => {
    return (
        <div className={styles.mainPage}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Hi There</span>
                    <h2>I am</h2>
                    <h1>Sergey Vorfolomeev</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={styles.photo}>
                    <img src={avatar} alt="avatar"/>
                </div>
            </div>
        </div>
    );
};

