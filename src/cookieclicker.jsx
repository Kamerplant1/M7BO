import { useState } from 'react'
import styles from './CookieClicker.module.css'
import cookieImg from './assets/cookie.png'

export function CookieClicker() {
    const [score, setScore] = useState(0);
    const [grandmas, setGrandmas] = useState(0);
    const [brams, setBrams] = useState(0);

    const grandmaPrice = 20 * 1.15 ** grandmas;
    const bramPrice = 50 * 1.15 ** brams;

    function cookieClick() {
        setScore(score + 1 + grandmas + brams);
    }

    function buyGrandma() {
        if (score > grandmaPrice) {
            setGrandmas(grandmas + 1);
            setScore(score - grandmaPrice);
        }
    }

    function buyBram() {
        if (score > bramPrice) {
            setBrams(brams + 1);
            setScore(score - bramPrice);
        }
    }

    return (
        <section className={styles.cookieClicker}>
            <h2>Cookie Clicker</h2>
            <button className={styles.cookie} onClick={cookieClick}>
                <img src={cookieImg} alt="cookie" />
            </button>
            <div>{Math.floor(score)} Cookies</div>

            <label>Grandmas: {grandmas}</label>
            <button className={styles.upgrade} onClick={buyGrandma}>
                Buy grandma ({Math.floor(grandmaPrice)} cookies)
            </button>

            <label>Brams: {brams}</label>
            <button className={styles.upgrade} onClick={buyBram}>
                Buy a Bram ({Math.floor(bramPrice)} cookies)
            </button>
        </section>
    )
}