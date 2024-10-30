import './mobile.css'

const MobilePhones = ({Mdata, addToCart, cartItems}) => {
    
    
    return ( 
        <section className="mobilePhones">
            <div className="container">
                <div className="left">
                    <div className="top">
                        <span className='active'>Brands</span>
                        <span>Shops</span>
                    </div>
                    <div className="brands">
                        <ul>
                            <li>
                                <i class="fa-brands fa-apple"></i>
                                Apple
                            </li>
                            <li>
                                <i class="fa-brands fa-apple"></i>
                                Apple
                            </li>
                            <li>
                                <i class="fa-brands fa-apple"></i>
                                Apple
                            </li>
                            <li>
                                <i class="fa-brands fa-apple"></i>
                                Apple
                            </li>
                            <li>
                                <i class="fa-brands fa-apple"></i>
                                Apple
                            </li>
                            <li>
                                <i class="fa-brands fa-apple"></i>
                                Apple
                            </li>
                        </ul>
                        <button>View All Brands</button>
                    </div>
                </div>
                <div className="right">
                    <div className="heading">
                        <h3>Mobile Phones</h3>
                        <div className="more">
                            <span>
                                View All
                                <i class="fa-solid fa-caret-right"></i>
                            </span>
                        </div>
                    </div>
                    <div className="content">
                        {Mdata.map((value, index)=>(
                            <div className="card" key = {index}>
                                <div className="top">
                                <span className="discount">{value.discount} Off</span>
                                <span className="quantity">0</span>
                            </div>
                            <div className="product">
                                <img src={value.image} />
                            </div>
                            <h3 className='title'>{value.name}</h3>
                            <div className="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            </div>
                            <div className="bottom">
                                <span className="price">{value.price}</span>
                                <button className='add' onClick={()=> addToCart(value)}>+</button>
                            </div>
                            <i class="fa-regular fa-heart heart"></i>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default MobilePhones;