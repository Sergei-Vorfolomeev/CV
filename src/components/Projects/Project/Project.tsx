import React from 'react';
import styles from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={styles.projectContainer}>
            <div className={styles.imgContainer}>
                <a href="#" className={styles.btn}>Watch</a>
            </div>
            {/*<img src={props.img} alt="logo"/>*/}

            {/*<button>Watch</button>*/}
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.description}>{props.description}</p>
        </div>
    );
};

