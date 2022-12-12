import React from 'react';
import styles from './App.module.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";

function App() {
    return (
        <div className={styles.app}>
            <Header/>
            <Main/>
            <Skills/>
        </div>
    );
}

export default App;
