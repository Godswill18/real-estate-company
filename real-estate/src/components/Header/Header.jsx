import React, { useState, useEffect } from 'react';
import './header.css';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
// import {  } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 45) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navBarClasses = isSticky ? 'container-fluid nav-bar bg-transparent sticky-top' : 'container-fluid nav-bar bg-transparent';

  return (
    <>
      {/* <!-- Navbar Start --> */}
      <div className={navBarClasses}>
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
          <Link to={'/'} className="navbar-brand d-flex align-items-center text-center">
            <div className="icon p-2 me-2">
              {/* <img className="img-fluid" src="../../assets/img/icon-deal.png" alt="Icon" style={{ width: '30px', height: '30px' }} /> */}
            </div>
            <h1 className="m-0 text-primary">LRHI ltd.</h1>
          </Link>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
                <ul className='ul'>
                    <NavLink className="nav-item nav-link active" to="/">
                        <li className={location.pathname === '/' ? 'activeX' : ''}>
                            Home
                        </li>
                    </NavLink>

                    <NavLink className="nav-item nav-link active" to="about">
                        <li className={location.pathname === '/about' ? 'activeX' : ''}>
                            About
                        </li>
                    </NavLink>

                </ul>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                 <span className={location.pathname === '/propertyList' || location.pathname === '/propertyType' || location.pathname === '/propertyAgent' ? 'activeX' : ''}> Property</span> 
                  </a>
                <div className="dropdown-menu rounded-0 m-0" >
                    <ul className='ul2'>
                        <NavLink className='dropdown-item' to='propertyList'>
                            <li className={location.pathname === '/propertyList' ? 'activeX' : ''}>
                                 All Property
                            </li>
                        </NavLink>


                        <NavLink className='dropdown-item' to='propertyType'>
                            <li className={location.pathname === '/propertyType' ? 'activeX' : ''}>
                            Property Type
                            </li>
                        </NavLink>

                        <NavLink className='dropdown-item' to='propertyAgent'>
                            <li className={location.pathname === '/propertyAgent' ? 'activeX' : ''}>
                                 Property Agent
                            </li>
                        </NavLink>
                    </ul>

                </div>
              </div>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  <span className={location.pathname === '/testimonial' ? 'activeX' : ''}> Testimonial</span></a>
                <div className="dropdown-menu rounded-0 m-0">
                  <a href="/testimonial" className="dropdown-item">Customers review</a>
                  {/* <a href="404.html" className="dropdown-item">404 Error</a> */}
                </div>
              </div>
              <NavLink className="nav-item nav-link" to={'contact'} >
                <span className={location.pathname === '/contact' ? 'activeX' : ''} >Contact</span>
              </NavLink>
              
            </div>
            
          </div>
        </nav>
      </div>
      {/* <!-- Navbar End --> */}
      <main>
        <Outlet />
      </main>
    </>
  );
}
