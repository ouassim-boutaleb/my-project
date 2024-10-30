import React, { useState } from 'react';
import {Link} from 'react-router-dom'
 
const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(true);
    return ( 
        <section className="navbar">
            <div className="container">
                <div className="categories">
                <span class="fa-solid fa-table-cells-large"></span>
                    <label>
                        Categories
                        <i class="fa-solid fa-angle-down"></i>
                    </label>
                </div>
                <div className={mobileMenu?'navigations': 'navigations active'}>
                    <ul>
                        <li>
                            <Link to='/'>home</Link>
                        </li>
                        <li>
                            <Link to='/pages'>pages</Link>
                        </li>
                        <li>
                            <Link to='/user'>user account</Link>
                        </li>
                        <li>
                            <Link to='/vendor'>vendor account</Link>
                        </li>
                        <li>
                            <Link to='/track'>track my order</Link>
                        </li>
                        <li>
                            <Link to='/contact'>contact</Link>
                        </li>
                    </ul>
                </div>
                    <button className='toggleMenu' onClick={()=> {setMobileMenu(!mobileMenu)}}>
                        {mobileMenu?<i class="fa-solid fa-bars"></i>:<i class="fa-solid fa-xmark close"></i>}
                    </button>

            </div>
        </section>
     );
}
 
export default Navbar;