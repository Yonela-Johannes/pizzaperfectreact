import './app.css';
import { useState } from 'react';
import Header from './components/Header';
import pizzaOne from './img/Pizzas.png'
import pizzaTwo from './img/pizzaTwo.png'
import pizzaThree from './img/large.png'
import Footer from './components/Footer';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([])
  const products = [
    {
      key: 1,
      id: 1,
      name: "Small Pizza",
      image: pizzaOne,
      price: 48.99,
      quantity: 1,
      items: [
        { desc: "small pizza with 3 toppings." },
        { desc: "1 meat topping" },
        { desc: "3 or less other toppings" }]
      ,
      button: "Order Small Pizza"
    },
    {
      key: 2,
      id: 2,
      name: "Medium Pizza",
      image: pizzaTwo,
      price: 78.99,
      quantity: 1,
      items: [
        { desc: "medium magretha with 3 topping max." },
        { desc: "2 or less meat toppings" },
        { desc: "3 or less other toppings" }]
      ,
      button: "Order Medium Pizza"
    },
    {
      key: 3,
      id: 3,
      name: "Large Pizza",
      image: pizzaThree,
      price: 114.99,
      quantity: 1,
      items: [
        { desc: "medium magretha with 3 topping max." },
        { desc: "3 meat toppings" },
        {
          desc: "3 or less other toppings"
        }]
      ,
      button: "Order large Pizza"
    },

  ]

  const addOrder = (items) => {
    console.log(items)
    const existItem = cartItems.find((item) => item.key === items.key)
    existItem ? setCartItems(cartItems.map((item) => item.key === items.key ? { ...existItem, quantity: existItem.quantity + 1 } : item
    )) :
      setCartItems([...cartItems, { ...items, quantity: 1 }])
  }

  return (
    <div className="app">
      <Header cartItems={cartItems}/>
      <main>
        <div>
          <Cart cartItems={cartItems} />
          <Products products={products} addOrder={addOrder} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
