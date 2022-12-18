import React from 'react';
import styles from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={styles.contactsPage}>
            <div className={styles.container}>
                <form className={styles.form}>
                    {/*<div className={styles.title}>*/}
                        <h2 className={styles.title}>My contacts</h2>
                    {/*</div>*/}
                    <input className={styles.input} type="text"/>
                    <input className={styles.input} type="text"/>
                    <textarea className={styles.textarea} name="" id="" cols={30} rows={10}></textarea>
                </form>
                <button className={styles.btn}>Send</button>
            </div>
        </div>
    );
};

