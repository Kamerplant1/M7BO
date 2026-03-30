import styles from './Top10.module.css';
import { Top10Item } from './Top10Item.jsx';

import bleach from './assets/bleach.jpg';
import tokyoghoul from './assets/tokyoghoul.jpg';
import fate from './assets/Fate.jpg';
import jojo from "./assets/jojo's.jpg";
import hxh from './assets/hxh.jpg';
import aot from './assets/aot.jpg';
import steinsgate from './assets/steinsgate.jpg';
import overlord from './assets/overlord.jpg';
import jjk from './assets/jjk.jpg';

export function Top10() {

    const top10 = [
        { title: "Bleach", studio: "Studio Pierrot", image: bleach },
        { title: "Tokyo Ghoul", studio: "Studio Pierrot", image: tokyoghoul },
        { title: "Fate Series", studio: "Ufotable", image: fate },
        { title: "JoJo's Bizarre Adventure", studio: "David Production", image: jojo },
        { title: "Hunter x Hunter (2011)", studio: "Madhouse", image: hxh },
        { title: "Attack on Titan", studio: "Wit Studio / MAPPA", image: aot },
        { title: "Steins;Gate", studio: "White Fox", image: steinsgate },
        { title: "Overlord", studio: "Madhouse", image: overlord },
        { title: "Jujutsu Kaisen", studio: "MAPPA", image: jjk }
    ];

    return (
        <section className={styles.top10}>
            <h2 className="Top10__Title">Top 10 Anime</h2>
            <ol className={styles.list}>
                {top10.map((item, index) => {
                    return (
                        <Top10Item
                            key={index}
                            number={index + 1 + "."}
                            title={item.title}
                            studio={item.studio}
                            image={item.image}
                        />
                    );
                })}
            </ol>
        </section>
    )
}