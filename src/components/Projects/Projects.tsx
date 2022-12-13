import React from 'react';
import styles from './Projects.module.css'
import {Project} from "./Project/Project";

export const Projects = () => {
    return (
        <div className={styles.projectPage}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>My Projects</h2>
                </div>
                <div className={styles.projects}>
                    <Project
                        img={'https://projectimg.com/hubfs/IMG%20-%20LOGO-TRANSPARENT-%20black%20font%20-%20Zoom-3.jpg'}
                        title={'Project title-1'}
                        description={'Description-1'}/>
                    <Project
                        img={'https://projectimg.com/hubfs/IMG%20-%20LOGO-TRANSPARENT-%20black%20font%20-%20Zoom-3.jpg'}
                        title={'Project title-2'}
                        description={'Description-2'}/>
                </div>
            </div>
        </div>
    );
};

