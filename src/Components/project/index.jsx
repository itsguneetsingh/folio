import React from 'react'
import styles from './style.module.css';

export default function index({index, title, description, link, setModal}) {

    return (
        <div onClick={() => {window.open(`${link}`, '_blank');}} onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index, link})}} className={styles.project}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}