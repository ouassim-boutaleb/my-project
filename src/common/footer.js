import './footer.css'

const Footer = () => {
    return ( 
        <section className="footer">
            <div className="container">
                <div className="column">
                    <h3 className = 'logo'>Bonic</h3>
                    <p>Lorem inpsum dolar sit amet, consectetur adipiscing elit. Auctor libero id et, in graavida. Sit diam duis mauris nulla cursus. Erat et lactus vel ut sollicitudin elit at amet.</p>
                    <div className="buttons">
                        <button>
                            <i class="fa-brands fa-google-play"></i>
                            Google Play
                        </button>
                        <button>
                            <i class="fa-brands fa-app-store-ios"></i>
                            App Store
                        </button>
                    </div>
                    
                </div>
                <div className="column">
                        <h3>About Us</h3>
                        <ul>
                            <li>Careers</li>
                            <li>Our Stores</li>
                            <li>Our Cares</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                </div>
                <div className="column">
                    <h3>Customer Care</h3>
                    <ul>
                        <li>Help Center</li>
                        <li>How to Buy</li>
                        <li>Track Your Order</li>
                        <li>Corporate & Bulk Purchasing</li>
                        <li>Returns & Refunds</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>70 Washington Square South, New York, NY 10012, United States</li>
                        <li>Email: o.boutaleb@esi-sba.com</li>
                        <li>+2135 5216 6888</li>
                    </ul>
                </div>
            </div>
        </section>
     );
}
 
export default Footer;