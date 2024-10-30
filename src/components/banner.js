import './banner.css'
import image from '../images/image.png'
import image2 from '../images/image2.png'

const Banner = () => {
    return ( 
        <section className="banner">
            <div className="container">
                <div className="left">
                    <div className="discount">
                        <span>30% OFF</span>
                    </div>
                    
                        <img src={image2} alt="" />
                    
                    <div className="bottom">
                    <h3>Flash Deals</h3>
                    <button>Shop Now</button>
                    </div>
                </div>
                <div className="right">
                    <img src={image} alt="" />
                    <div className="content">
                        <h1>Minimal Light Bulb</h1>
                        <h3>Limited Edition Sale</h3>
                        <span>$45.00</span>
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Banner;