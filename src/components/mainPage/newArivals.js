import './newArivals.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import 'swiper/css'

const NewArivals = () => {
    const data = [
        {
            image: 'https://m.media-amazon.com/images/I/61NIMuZS2ZL._AC_UY1000_.jpg',
            title: 'Sunglass',
            price: 150
        },
        {
            image: 'https://cdn.logojoy.com/wp-content/uploads/20191023114758/AdobeStock_224061283-min-1024x683.jpeg',
            title: 'Makeup',
            price: 10
        },
        {
            image: 'https://www.colmi.info/cdn/shop/files/SmartwatchCOLMIP76blackbuttonleftview.jpg?v=1705473666',
            title: 'Smartwatch',
            price: 350
        },
        {
            image: 'https://img.freepik.com/photos-gratuite/rouges-levres-colores-dans-tubes-blancs_23-2147710673.jpg?t=st=1730053655~exp=1730057255~hmac=5b4f2f4bcbed319630e91504d004a200cf7ad8a588c240ac259aad48a9698b7c&w=740',
            title: 'Lipstick',
            price: 90
        },
        {
            image: 'https://m.media-amazon.com/images/I/61NIMuZS2ZL._AC_UY1000_.jpg',
            title: 'Sunglass',
            price: 150
        },
        {
            image: 'https://cdn.logojoy.com/wp-content/uploads/20191023114758/AdobeStock_224061283-min-1024x683.jpeg',
            title: 'Makeup',
            price: 10
        },
        {
            image: 'https://www.colmi.info/cdn/shop/files/SmartwatchCOLMIP76blackbuttonleftview.jpg?v=1705473666',
            title: 'Smartwatch',
            price: 350
        },
        {
            image: 'https://img.freepik.com/photos-gratuite/rouges-levres-colores-dans-tubes-blancs_23-2147710673.jpg?t=st=1730053655~exp=1730057255~hmac=5b4f2f4bcbed319630e91504d004a200cf7ad8a588c240ac259aad48a9698b7c&w=740',
            title: 'Lipstick',
            price: 90
        },
    ]

    return ( 
        <section className="newArivals">
            <div className="container">
                <div className="heading">
                    <div>
                <svg width="35px" height="35px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#1fd16c"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>new-star</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="icons_Q2" data-name="icons Q2"> <path d="M42.3,24l3.4-5.1a2,2,0,0,0,.2-1.7A1.8,1.8,0,0,0,44.7,16l-5.9-2.4-.5-5.9a2.1,2.1,0,0,0-.7-1.5,2,2,0,0,0-1.7-.3L29.6,7.2,25.5,2.6a2.2,2.2,0,0,0-3,0L18.4,7.2,12.1,5.9a2,2,0,0,0-1.7.3,2.1,2.1,0,0,0-.7,1.5l-.5,5.9L3.3,16a1.8,1.8,0,0,0-1.2,1.2,2,2,0,0,0,.2,1.7L5.7,24,2.3,29.1a2,2,0,0,0,1,2.9l5.9,2.4.5,5.9a2.1,2.1,0,0,0,.7,1.5,2,2,0,0,0,1.7.3l6.3-1.3,4.1,4.5a2,2,0,0,0,3,0l4.1-4.5,6.3,1.3a2,2,0,0,0,1.7-.3,2.1,2.1,0,0,0,.7-1.5l.5-5.9L44.7,32a2,2,0,0,0,1-2.9ZM18,31.1l-4.2-3.2L12.7,27h-.1l.6,1.4,1.7,4-2.1.8L9.3,24.6l2.1-.8L15.7,27l1.1.9h0a11.8,11.8,0,0,0-.6-1.3l-1.6-4.1,2.1-.9,3.5,8.6Zm3.3-1.3-3.5-8.7,6.6-2.6.7,1.8L20.7,22l.6,1.6L25.1,22l.7,1.7L22,25.2l.7,1.9,4.5-1.8.7,1.8Zm13.9-5.7-2.6-3.7-.9-1.5h-.1a14.7,14.7,0,0,1,.4,1.7l.8,4.5-2.1.9-5.9-7.7,2.2-.9,2.3,3.3,1.3,2h0a22.4,22.4,0,0,1-.4-2.3l-.7-4,2-.8L33.8,19,35,20.9h0s-.2-1.4-.4-2.4L34,14.6l2.1-.9,1.2,9.6Z"></path> </g> </g> </g></svg>
                <span>New Arivals</span>

                    </div>
                    <div className="more">
                        <span>
                            View All
                            <i class="fa-solid fa-caret-right"></i>
                        </span>
                    </div>
                </div>
                <div className="content">


                <Swiper
                    modules={[Autoplay]}
                    speed={1000}
                    loop= {true}
                    navigation= {false}
                    spaceBetween={0}
                    slidesPerView={2}
                    breakpoints={
                        {
                            993: {
                                slidesPerView: 6
                            },
                            
                        }
                    }
                    
                    autoplay={{
                        delay: 3000,
                        pauseOnMouseEnter: false
                    }}
                >


                    {
                        data.map((value, index)=>(
                            <SwiperSlide>
                                <div className="box" key={index}>
                                    <div className="image">
                                        <img src={value.image} alt="" />
                                    </div>
                                    <h3>{value.title}</h3>
                                    <span>{value.price}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                    </Swiper>
                </div>
            </div>
        </section>
     );
}
 
export default NewArivals;