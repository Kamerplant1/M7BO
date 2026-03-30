import { useState, useEffect } from 'react';
import styles from './Pokemon.module.css';

const typeKleur = {
    normal: '#AAAA99',
};

export function Pokemon() {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/133")
            .then(response => response.json())
            .then(data => {
                setPokemon(data);
            });
    }, []);

    if (pokemon === null) {
        return (
            <section className={styles.pokemon}>
                <h2>laad pokemon ofz</h2>
            </section>
        );
    } else {
        return (
            <section className={styles.pokemon}>
                <h2 className={styles.name}>{pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <div className={styles.types}>
                    {pokemon.types.map((t) => (
                        <span
                            key={t.type.name}
                            className={styles.type}
                            style={{ backgroundColor: typeKleur[t.type.name] }}
                        >
                            {t.type.name}
                        </span>
                    ))}
                </div>
            </section>
        );
    }
}