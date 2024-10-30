import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

const Search = ({cartItems}) => {

    const [classe , setClasse] = useState('container search');

    function fixNav() {
        window.scrollY > 150 ? setClasse(' search active') : setClasse(' search');
    }
    useEffect(()=> {
        window.addEventListener('scroll', fixNav)
    },[])

    
    
    
    return ( 
        <section className={classe} id='search'>
            <div className="container">
            <div className="logo">
                <Link to='/'><h1>bonik</h1></Link>
                
            </div>
            <div className="input">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input  type="text" placeholder='Search And Hit Enter'/>
                <button>All Category</button>
            </div>
            <div className="icons">
                <span><i class="fa-solid fa-user"></i></span>
                <Link to='/cart'><span className='shop'><i class="fa-solid fa-bag-shopping"></i><li>{cartItems.length}</li></span></Link>
            </div>
            </div>
            
        </section>
     );
}
 
export default Search;