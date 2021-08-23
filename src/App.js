import React, {useState, useEffect} from 'react';
import './App.css';
import { Cards, Navbar } from './components';

function App() {
  
  // const [cards, setCards] = useState([]);
  // const [cart, setCart] = useState({});

  // const fetchCards = async() => {
  //   const {data} = await this.cards.list();
  // }

  // const fetchCart = async() => {
  //   setCart(await this.cart.retrieve())
  // }

  // const handleAddToCart = async (cardsId, quantity) => {
  //   const card = await this.card.add(cardsId, quantity);

  //   setCart(card.cart)
  // }

  // useEffect(() => {
  //   fetchCards();
  //   fetchCart();
  // }, []);

  // console.log(cart);

  return (
    <div>
      <Navbar />
      <Cards />
    </div>
  );
}

export default App;