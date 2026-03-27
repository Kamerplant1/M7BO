import styles from './Top10.module.css';
import { Top10Item } from './Top10Item.jsx';

export function Top10() {

    const top10 = [
        { title: "Bleach", studio: "Studio Pierrot" },
        { title: "Tokyo Ghoul", studio: "Studio Pierrot" },
        { title: "Fate Series", studio: "Ufotable" },

        { title: "JoJo's Bizarre Adventure", studio: "David Production" },
        { title: "Hunter x Hunter (2011)", studio: "Madhouse" },
        { title: "Attack on Titan", studio: "Wit Studio / MAPPA" },
        { title: "Steins;Gate", studio: "White Fox" },
        { title: "Overlord", studio: "Madhouse" },
        { title: "Jujutsu Kaisen", studio: "MAPPA" }
    ];

    return (
        <section className={styles.top10}>
            <h2 className="Top10__Title">Top 10 Anime</h2>
            <ol className={styles.list}>
                {top10.map((item, index) => {
                    return (
                        <Top10Item
                            key={index}
                            number={index + 1}
                            title={item.title}
                            studio={item.studio}
                        />
                    );
                })}
            </ol>
        </section>
    )
}