import React from 'react';
import styles from './Project.module.css'

type ProjectPropsType = {
    img: string
    title: string
    description: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={styles.projectContainer}>
            <img src={props.img} alt="logo"/>
            <button>Watch</button>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
};

