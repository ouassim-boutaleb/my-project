import React, { useEffect } from 'react';
import './cart.css'
const Cart = ({cartItems, deleteProduct, increment,decrement})=> {
    
    
   const totalPrice = cartItems.reduce((price, current)=> {
    return (price + current.quantity * current.price)
}, 0  )

console.log(totalPrice)


    return (
        <section className="cart">
            
            <div className="container">
                {cartItems.length == 0 ? <h1 className='noProduct'>There is No Product</h1> :
                
                (<div className="products">
                    {cartItems.map((value, index)=> (
                        <div className="box" key={index}>
                            <img src={value.image} alt="" />
                            <div className="content">
                                <h3>{value.name}</h3>
                                <div className="price">
                                    <p>{value.price}*{value.quantity}</p>
                                    <p className='priceQty'>$<span>{value.price* value.quantity}</span></p>
                                </div>
                            </div>
                            <button className='delete' onClick={()=> deleteProduct(value)}>X</button>
                            <div className="buttons">
                                <button className='increment' onClick={()=> increment(value)}>+</button>
                                <button className='decrement' onClick={()=> decrement(value)}>-</button>
                            </div>

                        </div>
                    ))}
                </div>
            )}
                <div className="summary">
                    <h3>Cart Summary</h3>
                    <div className="total">
                        <h4>Total Price:</h4>
                        <h4 className='totalPrice'>$<span>{totalPrice}.00</span></h4>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;