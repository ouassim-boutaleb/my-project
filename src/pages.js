import Footer from './common/footer.js';
import Banner from './components/banner.js';
import BigDiscount from './components/bigDiscount.js';
import FlashDeals from './components/flashDeals.js';
import Home from './components/mainPage/home.js'
import NewArivals from './components/mainPage/newArivals.js';
import TopCategories from './components/mainPage/topCategories.js';
import MobilePhones from './components/mobile.js';
import Serivces from './components/services.js';


const Pages = ({Fdata, addToCart, cartItems, Mdata}) => {
    



    return ( 
        <>
            <Home  />
            <FlashDeals Fdata={Fdata} addToCart={addToCart} cartItems={cartItems}  />
            <TopCategories />
            <NewArivals />
            <BigDiscount />
            <MobilePhones Mdata={Mdata} addToCart={addToCart} cartItems={cartItems} />
            <Banner />
            <Serivces /> 
            
        </>
     );
}
 
export default Pages;