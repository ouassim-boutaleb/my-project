import Categories from "./categories";
import Slider from "./slider";
import './home.css'
const Home = () => {
    return ( 
        <section className="home">
            <div className="container">
                <Categories />
                <Slider />
            </div>
        </section>
     );
}
 
export default Home;