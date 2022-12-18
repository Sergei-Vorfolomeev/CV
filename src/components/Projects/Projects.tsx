import React from 'react';
import styles from './Projects.module.css'
import {Project} from "./Project/Project";

export const Projects = () => {
    return (
        <div className={styles.projectPage}>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>My Projects</h2>
                </div>
                <div className={styles.projects}>
                    <Project
                        title={'Project title-1'}
                        description={'Description-1'}/>
                    <Project
                        title={'Project title-2'}
                        description={'Description-2'}/>
                </div>
            </div>
        </div>
    );
};

