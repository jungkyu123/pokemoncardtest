import React from 'react';
import SpecificCard from './Card/Card';
import { Grid, InputBase } from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';

import Card from './Card/Card';
import useStyles from './styles';

const cards = [
    { id: 1, name: 'Caterpie', price: '$0.25', image: 'https://images.pokemontcg.io/mcd19/1.png', type: 'Grass', rarity: 'Promo', set: 'McDonalds Collection 2019' },
    { id: 2, name: 'Azumarill', price: '$3.25', image: 'https://images.pokemontcg.io/ex7/1.png', type: 'Water', rarity: 'Rare Holo', set: 'Team Rocket Return' },
    { id: 3, name: 'Bulbasaur', price: '$0.34', image: 'https://images.pokemontcg.io/det1/1.png', type: 'Grass', rarity: 'Common', set: 'Sun & Moon' },
    { id: 4, name: 'Venusaur', price: '$25.59', image: 'https://images.pokemontcg.io/ru1/1.png', type: 'Grass', rarity: '', set: 'Pokemon Rumble' },
    { id: 5, name: 'Absol', price: '$8.82', image: 'https://images.pokemontcg.io/ex3/1.png', type: 'Darkness', rarity: 'Rare Holo', set: 'EX' },
    { id: 6, name: 'Aggron', price: '$1.7', image: 'https://images.pokemontcg.io/hgss4/1.png', type: 'Metal', rarity: 'Rare Holo', set: 'HeartGold & SoulSilver' },
    { id: 7, name: 'Beedrill', price: '$5.03', image: 'https://images.pokemontcg.io/ex11/1.png', type: 'Grass', rarity: 'Rare Holo', set: 'EX' },
    { id: 8, name: 'Alakazam', price: '$22.45', image: 'https://images.pokemontcg.io/base4/1.png', type: 'Psychic', rarity: 'Rare Holo', set: 'Base' },
    { id: 9, name: 'Ampharos', price: '$1.1', image: 'https://images.pokemontcg.io/pl1/1.png', type: 'Lightning', rarity: 'Rare Holo', set: 'Platinum' },
    { id: 10, name: 'Dratini', price: '$0.6', image: 'https://images.pokemontcg.io/dv1/1.png', type: 'Dragon', rarity: 'Rare Holo', set: 'Black & White' },
    { id: 11, name: 'Acanine', price: '$4.88', image: 'https://images.pokemontcg.io/hgss1/1.png', type: 'Fire', rarity: 'Rare Holo', set: 'HeartGold & SoulSilver' },
    { id: 12, name: 'Blaines Moltres', price: '$33.87', image: 'https://images.pokemontcg.io/gym1/1.png', type: 'Fire', rarity: 'Rare Holo', set: 'Gym' },
    { id: 13, name: 'Aerodactyl', price: '$9.55', image: 'https://images.pokemontcg.io/gym1/1.png', type: 'Fighting', rarity: 'Rare Holo', set: 'Base' },
]

function Cards() {

    const classes = useStyles();

    return (
        <main className={classes.content}>
            {/* This classes.toolbar will allow me to push the products down below the Navbar */}
            <div className={classes.toolbar} />
            {/* <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Set"
                />
            </div> */}
            <Grid container justifyContent="center" spacing={4}>
                {cards.map((card) => (
                    <Grid item key={card.id} xs={12} sm={6} lg={3}>
                        <SpecificCard card={card} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Cards;

// const [myOptions, setMyOptions] = useState([]);
// const [myOptions2, setMyOptions2] = useState([]);
// const [myOptions3, setMyOptions3] = useState([]);

// const getDataFromAPI = () => {
//     console.log("Sets Fetched from API")
//     fetch('https://api.pokemontcg.io/v2/sets').then((response) => {
//         return response.json()
//     }).then((res) => {
//         console.log(res.data)
//         for (var i = 0; i < res.data.length; i++) {
//             myOptions.push(res.data[i].name)
//         }
//         setMyOptions(myOptions)
//     })
// }
// const getDataFromAPI2 = () => {
//     console.log("Sets Fetched from API")
//     fetch('https://api.pokemontcg.io/v2/rarities').then((response) => {
//         return response.json()
//     }).then((res) => {
//         console.log(res.data)
//         for (var i = 0; i < res.data.length; i++) {
//             myOptions2.push(res.data[i].all)
//         }
//         setMyOptions(myOptions2)
//     })
// }
// const getDataFromAPI3 = () => {
//     console.log("Sets Fetched from API")
//     fetch('https://api.pokemontcg.io/v2/types').then((response) => {
//         return response.json()
//     }).then((res) => {
//         console.log(res.data)
//         for (var i = 0; i < res.data.length; i++) {
//             myOptions3.push(res.data[i].all)
//         }
//         setMyOptions(myOptions3)
//     })
// }

{/* <Grid className={classes.container}>
                    <h1 className={classes.chooseCard}>Choose Card</h1>
                    <div className={classes.searchBox}>
                        <Autocomplete style={{ width: 82 }} freeSolo autoComplete autoHighlight options={myOptions} renderInput={(params) => (
                            <TextField {...params}
                                onChange={getDataFromAPI}
                                variant="outlined"
                                label="Set"
                            />
                        )} />
                    </div>

                    <div className={classes.searchBox}>
                        <Autocomplete style={{ width: 82 }} freeSolo autoComplete autoHighlight options={myOptions2} renderInput={(params) => (
                            <TextField {...params}
                                onChange={getDataFromAPI2}
                                variant="outlined"
                                label="Rarity"
                            />
                        )} />
                    </div>

                    <div className={classes.searchBox}>
                        <Autocomplete style={{ width: 82 }} freeSolo autoComplete autoHighlight options={myOptions3} renderInput={(params) => (
                            <TextField {...params}
                                onChange={getDataFromAPI3}
                                variant="outlined"
                                label="Type"
                            />
                        )} />
                    </div>
                </Grid> */}
