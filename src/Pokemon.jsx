import { useState, useEffect } from 'react';
import styles from './Pokemon.module.css';

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
                <h2>Fetching Pokemon...</h2>
            </section>
        );
    } else {
        return (
            <section className={styles.pokemon}>
                <h2 className={styles.name}>{pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </section>
        );
    }
}
