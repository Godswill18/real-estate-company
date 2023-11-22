import React, { useEffect, useState } from 'react'
import ContactAgent from '../contactAgent/ContactAgent';
import Team from '../team/Team';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
// import {faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

export default function PropAgentBody() {
    useEffect(() => {
        const spinnerTimeout = setTimeout(() => {
          const spinnerElement = document.getElementById('spinner');
          if (spinnerElement) {
            spinnerElement.classList.remove('show');
          }
        }, 100);
    
        return () => {
          // Clear the timeout when the component unmounts to avoid potential memory leaks
          clearTimeout(spinnerTimeout);
        };
      }, []); // An empty dependency array ensures the effect runs only once on mount

      // back to top function

      const [showBackToTop, setShowBackToTop] = useState(false);

      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowBackToTop(true);
        } else {
          setShowBackToTop(false);
        }
      };
    
      const handleBackToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
  return (
    <div class="container-xxl bg-white p-0">
    {/* <!-- Spinner Start --> */}
    <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
            {/* <span class="sr-only">Loading...</span> */}
        </div>
    </div>
    {/* <!-- Spinner End --> */}


 

    {/* <!-- Header Start --> */}
    <div class="container-fluid header bg-white p-0">
        <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
            <div class="col-md-6 p-5 mt-lg-5">
                <h1 class="display-5 animated fadeIn mb-4">Property Agent</h1> 
                    <nav aria-label="breadcrumb animated fadeIn">
                    <ol class="breadcrumb text-uppercase">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Property Agent</a></li>
                    </ol>
                </nav>
            </div>
            <div class="col-md-6 animated fadeIn">
                <img class="img-fluid" src="img/header.jpg" alt=""/>
            </div>
        </div>
    </div>
    {/* <!-- Header End --> */}


    {/* <!-- Search Start --> */}
    <div class="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{padding: '35px'}}>
        <div class="container">
            <div class="row g-2">
                <div class="col-md-10">
                    <div class="row g-2">
                        <div class="col-md-4">
                            <input type="text" class="form-control border-0 py-3" placeholder="Search Keyword"/>
                        </div>
                        <div class="col-md-4">
                            <select class="form-select border-0 py-3">
                                <option selected>Property Type</option>
                                <option value="1">Property Type 1</option>
                                <option value="2">Property Type 2</option>
                                <option value="3">Property Type 3</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <select class="form-select border-0 py-3">
                                <option selected>Location</option>
                                <option value="1">Location 1</option>
                                <option value="2">Location 2</option>
                                <option value="3">Location 3</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <button class="btn btn-dark border-0 w-100 py-3">Search</button>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Search End --> */}


    {/* <!-- Team Start --> */}
    <div className="container-xxl py-5">
        <Team/>
        </div>
    {/* <!-- Team End --> */}


    {/* <!-- Call to Action Start --> */}
     <ContactAgent/>
    {/* <!-- Call to Action End --> */}
    


    {/* <!-- Back to Top --> */}
    {showBackToTop && (
        
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top" onClick={handleBackToTop}><FontAwesomeIcon icon={faAngleUp} style={{color: "#ffffff",}} /></a>
      
          )}
</div>
  )
}
