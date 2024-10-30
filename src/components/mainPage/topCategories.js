import './topCategories.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const TopCategories = () => {
    return ( 
        <section className="topCategories">
            <div className="container">
                <div className="heading">
                    <div>
                        <i class="fa-solid fa-table-cells-large"></i>
                        <h3>Top Categories</h3>
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
                    spaceBetween={25}
                    slidesPerView={2}
                    breakpoints={
                        {
                            993: {
                                slidesPerView: 3
                            },
                            
                        }
                    }
                    
                    autoplay={{
                        delay: 2000,
                        pauseOnMouseEnter: false
                    }}
                >

                <SwiperSlide>
                    <div className="box">
                        <div className="top">
                            <span className="title">Headphones</span>
                            <span className="orders">3k Orders This Week</span>
                        </div>
                        <img src="https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg" alt="" />
                        <img src="https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg" alt="" />
                        <img src="https://media.wired.com/photos/6014a6587201ff6c1ba30bcb/master/pass/Gear-Apple-Airpods-Max-Angle-SOURCE-Apple.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="box">
                        <div className="top">
                            <span className="title">Headphones</span>
                            <span className="orders">3k Orders This Week</span>
                        </div>
                        <img src="https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg" alt="" />
                        <img src="https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg" alt="" />
                        <img src="https://media.wired.com/photos/6014a6587201ff6c1ba30bcb/master/pass/Gear-Apple-Airpods-Max-Angle-SOURCE-Apple.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="box">
                        <div className="top">
                            <span className="title">Headphones</span>
                            <span className="orders">3k Orders This Week</span>
                        </div>
                        <img src="https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg" alt="" />
                        <img src="https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg" alt="" />
                        <img src="https://media.wired.com/photos/6014a6587201ff6c1ba30bcb/master/pass/Gear-Apple-Airpods-Max-Angle-SOURCE-Apple.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="box">
                        <div className="top">
                            <span className="title">Headphones</span>
                            <span className="orders">3k Orders This Week</span>
                        </div>
                        <img src="https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg" alt="" />
                        <img src="https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg" alt="" />
                        <img src="https://media.wired.com/photos/6014a6587201ff6c1ba30bcb/master/pass/Gear-Apple-Airpods-Max-Angle-SOURCE-Apple.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="box">
                        <div className="top">
                            <span className="title">Headphones</span>
                            <span className="orders">3k Orders This Week</span>
                        </div>
                        <img src="https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg" alt="" />
                        <img src="https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg" alt="" />
                        <img src="https://media.wired.com/photos/6014a6587201ff6c1ba30bcb/master/pass/Gear-Apple-Airpods-Max-Angle-SOURCE-Apple.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="box">
                        <div className="top">
                            <span className="title">Headphones</span>
                            <span className="orders">3k Orders This Week</span>
                        </div>
                        <img src="https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg" alt="" />
                        <img src="https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg" alt="" />
                        <img src="https://media.wired.com/photos/6014a6587201ff6c1ba30bcb/master/pass/Gear-Apple-Airpods-Max-Angle-SOURCE-Apple.jpg" alt="" />
                    </div>
                </SwiperSlide>

                </Swiper>
                </div>
            </div>
        </section>
     );
}
 
export default TopCategories;