import React from 'react';
import styles from './Main.module.css'
import avatar from '../../assets/img/photo.jpg'

export const Main = () => {
    return (
        <div className={styles.mainPage}>
            <div className={styles.container}>
                {/*<div className={styles.photo}>*/}
                {/*    <img src={''} alt="avatar"/>*/}
                {/*</div>*/}
                <div className={styles.greeting}>
                    {/*<span>Hi There</span>*/}
                    {/*<h2>I am</h2>*/}
                    <h1 className={styles.title}>Sergey</h1>
                    <h1 className={styles.surname}>Vorfolomeev</h1>
                    <p>Frontend Developer</p>
                </div>

            </div>
        </div>
    );
};

