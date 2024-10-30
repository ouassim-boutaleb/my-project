
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './flashDeals.css'
import { useEffect, useState } from 'react';

// Import Swiper styles

const FlashDeals = ({Fdata, cartItems, addToCart}) => {
    

   
    
    
    

    return ( 
        <section className="flashDeals">
            <div className="container">
                <div className="heading">
                    <i class="fa-solid fa-bolt"></i>
                    <h3>Flash Deals</h3>
                </div>
                <div className="carousel">
                    
                    <Swiper
                    modules={[Autoplay]}
                    speed={1000}
                    loop= {true}
                    navigation= {false}
                    spaceBetween={25}
                    slidesPerView={2}
                    breakpoints={
                        {
                            993: {
                                slidesPerView: 4
                            },
                            
                            768: {
                                
                                slidesPerView: 3
                            }
                        }
                    }
                    
                    autoplay={{
                        delay: 2000,
                        pauseOnMouseEnter: false
                    }}
                >


                    {Fdata.map((value, index)=> (
                        <SwiperSlide>
                        <div className = 'card' key={index}>
                            
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
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>
            </div>
        </section>
     );
}
 
export default FlashDeals;