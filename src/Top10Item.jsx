import styles from './Top10.module.css';

export function Top10Item({ number, title, studio }) {
    return (
        <li className={styles.Anime}>
            <div className={styles.number}>{number}</div>
            <div className={styles.AnimeInfo}>
                <h3>{title}</h3>
                <h4>{studio}</h4>
            </div>
        </li>
    )
}