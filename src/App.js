
import './App.css';
import Header from './common/header/header.js'
import Pages from './pages.js'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import Cart from './cart.js';
import Footer from './common/footer.js';


function App() {
  const Fdata = [
    {
        id: 1,
        discount: '50%',
        price: '100.00',
        name: 'Phone',
        image: 'https://cdn.shopify.com/s/files/1/0787/3540/9436/files/CMF_Black_Animation_2024_06_01_v01_png_00010_1.png'
    },
    {
        id: 2,
        discount: '50%',
        price: '100.00',
        name: 'SmartWatch',
        image: 'https://cdn.shopify.com/s/files/1/0787/3540/9436/files/CMF_Black_Animation_2024_06_01_v01_png_00010_1.png'
    },
    {
        id: 3,
        discount: '50%',
        price: '100.00',
        name: 'Phone',
        image: 'https://cdn.shopify.com/s/files/1/0787/3540/9436/files/CMF_Black_Animation_2024_06_01_v01_png_00010_1.png'
    },
    {
        id: 4,
        discount: '50%',
        price: '100.00',
        name: 'Phone',
        image: 'https://cdn.shopify.com/s/files/1/0787/3540/9436/files/CMF_Black_Animation_2024_06_01_v01_png_00010_1.png'
    },
    {
        id: 5,
        discount: '50%',
        price: '100.00',
        name: 'Phone',
        image: 'https://cdn.shopify.com/s/files/1/0787/3540/9436/files/CMF_Black_Animation_2024_06_01_v01_png_00010_1.png'
    },
    {
        id: 6,
        discount: '50%',
        price: '100.00',
        name: 'Phone',
        image: 'https://cdn.shopify.com/s/files/1/0787/3540/9436/files/CMF_Black_Animation_2024_06_01_v01_png_00010_1.png'
    },
    {
        id: 7,
        discount: '50%',
        price: '100.00',
        name: 'Phone',
        image: 'https://cdn.shopify.com/s/files/1/0787/3540/9436/files/CMF_Black_Animation_2024_06_01_v01_png_00010_1.png'
    },
]
const Mdata = [
  {
      id: 1,
      image: 'https://www.mymac.dz/wp-content/uploads/2021/02/airpods-avec-boitier-de-charge-3.jpg',
      discount: '25%',
      name: 'Airpods',
      price: '180.00'
  },
  {   
      id: 2,
      image: 'https://www.mymac.dz/wp-content/uploads/2021/02/airpods-avec-boitier-de-charge-3.jpg',
      discount: '25%',
      name: 'Airpods',
      price: '180.00'
  },
  {
      id: 3,
      image: 'https://www.mymac.dz/wp-content/uploads/2021/02/airpods-avec-boitier-de-charge-3.jpg',
      discount: '25%',
      name: 'Airpods',
      price: '180.00'
  },
  { 
      id: 4,
      image: 'https://www.mymac.dz/wp-content/uploads/2021/02/airpods-avec-boitier-de-charge-3.jpg',
      discount: '25%',
      name: 'Airpods',
      price: '180.00'
  },
  {
      id: 5,
      image: 'https://www.mymac.dz/wp-content/uploads/2021/02/airpods-avec-boitier-de-charge-3.jpg',
      discount: '25%',
      name: 'Airpods',
      price: '180.00'
  },
  { 
      id: 6,
      image: 'https://www.mymac.dz/wp-content/uploads/2021/02/airpods-avec-boitier-de-charge-3.jpg',
      discount: '25%',
      name: 'Airpods',
      price: '180.00'
  },
  {
      id: 7,
      image: 'https://www.mymac.dz/wp-content/uploads/2021/02/airpods-avec-boitier-de-charge-3.jpg',
      discount: '25%',
      name: 'Airpods',
      price: '180.00'
  },
  {
      id: 8,
      image: 'https://www.mymac.dz/wp-content/uploads/2021/02/airpods-avec-boitier-de-charge-3.jpg',
      discount: '25%',
      name: 'Airpods',
      price: '180.00'
  },
  {
      id: 9,
      image: 'https://www.mymac.dz/wp-content/uploads/2021/02/airpods-avec-boitier-de-charge-3.jpg',
      discount: '25%',
      name: 'Airpods',
      price: '180.00'
  },
  {
      id: 10,
      image: 'https://www.mymac.dz/wp-content/uploads/2021/02/airpods-avec-boitier-de-charge-3.jpg',
      discount: '25%',
      name: 'Airpods',
      price: '180.00'
  },
]
const [cartItems, setCartItems] = useState([])

function addToCart(product) {
  
  const productExist = cartItems.find(cartItem => cartItem.id == product.id)
    if(productExist) {
      setCartItems(cartItems.map((item)=> (
        item.id == productExist.id ? {...productExist, quantity: productExist.quantity + 1 } : item
      )))
    }
    if(!productExist) {
      setCartItems([...cartItems , {...product , quantity: 1}])
    }
  }

  function deleteProduct(product) {
    setCartItems(cartItems.filter((item)=> (
        item!== product
    )))

    
  }

  function increment(product) {
    setCartItems(cartItems.map((item)=> (
        item == product ? {...item, quantity: item.quantity + 1} : item
    )))
    
}

    function decrement(product) {
      if(product.quantity == 1) {
        deleteProduct(product);
      }else {
        setCartItems(cartItems.map((item)=> (
          item == product ? {...item, quantity: item.quantity - 1} : item
      )))
      }
    }



  return (
    <>
      <Router>
        <Header cartItems={cartItems} />
        <Routes >
        <Route path='/' exact element={<Pages Fdata={Fdata} addToCart={addToCart} cartItems={cartItems} Mdata={Mdata} />}  />
        <Route path='/cart' exact element={<Cart cartItems={cartItems} deleteProduct={deleteProduct} increment={increment} decrement={decrement} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
