import React from 'react';
import styles from './Skill.module.css'

type SkillPropsType = {
    img: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={styles.skillContainer}>
            <img src={props.img} alt="logo"/>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.description}>{props.description}</p>
        </div>
    );
};
