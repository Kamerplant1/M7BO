import styles from './Top10.module.css';
import { Top10Item } from './Top10Item.jsx';

export function Top10() {

    const top10 = [
        { title: "Bleach", studio: "Studio Pierrot", image: "src/assets/bleach.jpg" },
        { title: "Tokyo Ghoul", studio: "Studio Pierrot", image: "src/assets/tokyoghoul.jpg" },
        { title: "Fate Series", studio: "Ufotable", image: "src/assets/Fate.jpg" },

        { title: "JoJo's Bizarre Adventure", studio: "David Production", image: "src/assets/jojo's.jpg" },
        { title: "Hunter x Hunter (2011)", studio: "Madhouse", image: "src/assets/hxh.jpg" },
        { title: "Attack on Titan", studio: "Wit Studio / MAPPA", image: "src/assets/aot.jpg" },
        { title: "Steins;Gate", studio: "White Fox", image: "src/assets/steinsgate.jpg" },
        { title: "Overlord", studio: "Madhouse", image: "src/assets/overlord.jpg" },
        { title: "Jujutsu Kaisen", studio: "MAPPA", image: "src/assets/jjk.jpg" }
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