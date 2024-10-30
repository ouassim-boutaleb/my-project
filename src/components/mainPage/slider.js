// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Import Swiper styles
import 'swiper/css';
const Slider = () => {
   
    const data = [
        {
            title: '50% Off For Your First Shopping',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi corrupti sed saepe.Lorem ipsum dolor sit amet",
            image: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/112022_cer-white.jpg',
        },
        {
            title: '50% Off For Your First Shopping',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi corrupti sed saepe.",
            image: 'https://foxtrotouterwear.com/cdn/shop/products/image_2022_07_08T08_11_16_181Z_800x.png?v=1666787469',
        },
        {
            title: '50% Off For Your First Shopping',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi corrupti sed saepe.",
            image: 'https://m.media-amazon.com/images/I/71Liv-br3iL._AC_UF1000,1000_QL80_.jpg',
        },
    ]
    
    return ( 
        


       <section className="slider">
        <Swiper
        modules={[Autoplay]}
        speed={1000}
        loop= {true}
        navigation= {false}
        spaceBetween={0}
        slidesPerView={1}
        
        autoplay={{
            delay: 3500,
            pauseOnMouseEnter: false
        }}
      >
            {data.map((value, index)=>(
                <SwiperSlide>
                <div className="slide" key={index}>
                    <div className="left">
                        <h1>{value.title}</h1>
                        <p>{value.description}</p>
                        <button>Visit Collection</button>
                    </div>
                    <div className="right">
                        <img src={value.image} alt="image" />   
                    </div>
                </div>
                </SwiperSlide>
            ))}
        </Swiper>
       </section> 
     );
}
 
export default Slider;