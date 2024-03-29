import React from 'react';
import styles from './Skills.module.css'
import {Skill} from "./Skill/Skill";
import logo from '../../assets/img/logo192.png'

export const Skills = () => {
    return (
        <div className={styles.skillsPage}>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>My skills</h2>
                </div>
                <div className={styles.skillsContainer}>
                    <Skill img={logo}
                           title={'React'}
                           description={'JavaScript library for building user interfaces'}/>
                    <Skill img={logo}
                           title={'Redux'}
                           description={'JavaScript library used to manage application state'}/>
                    <Skill img={logo}
                           title={'Typescript'}
                           description={'Strongly typed programming language that builds on JavaScript'}/>
                </div>
            </div>
        </div>
    );
};

