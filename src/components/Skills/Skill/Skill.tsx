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
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
};
