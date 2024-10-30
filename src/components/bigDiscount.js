import './bigDiscount.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


const BigDiscount = () => {
    const data = [
        {
            image: 'https://www.audeze.com/cdn/shop/files/ADZ_Maxwell_white_3-Quarters_XB_nooverlay_1200x.jpg?v=1687383866',
            name: 'Headphone',
            price: '100$'
        },
        {
            image: 'https://www.audeze.com/cdn/shop/files/ADZ_Maxwell_white_3-Quarters_XB_nooverlay_1200x.jpg?v=1687383866',
            name: 'Headphone',
            price: '100$'
        },
        {
            image: 'https://www.audeze.com/cdn/shop/files/ADZ_Maxwell_white_3-Quarters_XB_nooverlay_1200x.jpg?v=1687383866',
            name: 'Headphone',
            price: '100$'
        },
        {
            image: 'https://www.audeze.com/cdn/shop/files/ADZ_Maxwell_white_3-Quarters_XB_nooverlay_1200x.jpg?v=1687383866',
            name: 'Headphone',
            price: '100$'
        },
        {
            image: 'https://www.audeze.com/cdn/shop/files/ADZ_Maxwell_white_3-Quarters_XB_nooverlay_1200x.jpg?v=1687383866',
            name: 'Headphone',
            price: '100$'
        },
        {
            image: 'https://www.audeze.com/cdn/shop/files/ADZ_Maxwell_white_3-Quarters_XB_nooverlay_1200x.jpg?v=1687383866',
            name: 'Headphone',
            price: '100$'
        },
        {
            image: 'https://www.audeze.com/cdn/shop/files/ADZ_Maxwell_white_3-Quarters_XB_nooverlay_1200x.jpg?v=1687383866',
            name: 'Headphone',
            price: '100$'
        },
        {
            image: 'https://www.audeze.com/cdn/shop/files/ADZ_Maxwell_white_3-Quarters_XB_nooverlay_1200x.jpg?v=1687383866',
            name: 'Headphone',
            price: '100$'
        },
        {
            image: 'https://www.audeze.com/cdn/shop/files/ADZ_Maxwell_white_3-Quarters_XB_nooverlay_1200x.jpg?v=1687383866',
            name: 'Headphone',
            price: '100$'
        },
       
    ]
    
    return ( 
        <section className="bigDiscount">
            <div className="container">
                <div className="heading">
                    <div className="title">
                    <svg width='25px' height='25px' fill="#fe5a01" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.5 6a1.25 1.25 0 0 0-1.25-1.25h-1.06a2.19 2.19 0 0 0 .23-1A2.22 2.22 0 0 0 11.2 1.5 3.78 3.78 0 0 0 8 3.07 3.78 3.78 0 0 0 4.8 1.5a2.22 2.22 0 0 0-2.22 2.22 2.19 2.19 0 0 0 .23 1H1.75A1.25 1.25 0 0 0 .5 6v2.5h1.25v4.79A1.25 1.25 0 0 0 3 14.5h10a1.25 1.25 0 0 0 1.25-1.25V8.46h1.25zm-4.3-3.25a1 1 0 0 1 0 2H8.68a2.36 2.36 0 0 1 2.52-2zm-6.4 0a2.36 2.36 0 0 1 2.52 2H4.8a1 1 0 0 1 0-1.95zM1.75 6h4.37v1.21H1.75zm4.37 7.29H3V8.46h3.12zm1.26 0V6h1.24v7.29zm5.62 0H9.88V8.46H13zm1.25-6H9.88V6h4.37z"></path></g></svg>
                        <span>Big Discount</span>
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
                    spaceBetween={20}
                    slidesPerView={2}
                    breakpoints={
                        {
                            993: {
                                slidesPerView: 6
                            },
                            768: {
                                slidesPerView: 4
                            }
                            
                        }
                    }
                    
                    // autoplay={{
                    //     delay: 2000,
                    //     pauseOnMouseEnter: false
                    // }}
                >

                    
                    {data.map((value, index)=> (
                        <SwiperSlide>
                        <div className="box" key={index}>
                            <img src={value.image} alt="" />
                            <h3>{value.name}</h3>
                            <span>{value.price}</span>
                        </div>
                        </SwiperSlide>
                    ))}
                    
            
                </Swiper>

                </div>
            </div>
        </section>
     );
}
 
export default BigDiscount;