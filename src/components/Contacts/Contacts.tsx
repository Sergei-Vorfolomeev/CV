import React from 'react';
import styles from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={styles.contactsPage}>
            <div className={styles.container}>
                <form className={styles.form}>
                    <div className={styles.title}>
                        <h2>My contacts</h2>
                    </div>
                    <p className={styles.inputBox}>
                        <input className={styles.input} type="text"/>
                    </p>
                    <p className={styles.inputBox}>
                        <input className={styles.input} type="text"/>
                    </p>
                    <textarea className={styles.textarea} name="" id="" cols={30} rows={10}></textarea>
                </form>
                {/*<div className={styles.btn}>*/}
                    <button className={styles.btn}>Send</button>
                {/*</div>*/}
            </div>
        </div>
    );
};

