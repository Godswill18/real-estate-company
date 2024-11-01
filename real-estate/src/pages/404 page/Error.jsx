import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import '../../style.css';
import '../../bootstrap.css'
import '../../lib/animate/animate.css';
import '../../bootstrap.min.css';


export default function Error() {
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
   <>
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


        {/* <!-- 404 Start --> */}
        <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container text-center">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <i class="bi bi-exclamation-triangle display-1 text-primary"></i>
                        <h1 class="display-1">404</h1>
                        <h1 class="mb-4">Page Not Found</h1>
                        <p class="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                        <a class="btn btn-primary py-3 px-5" href="/">Go Back To Home</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- 404 End --> */}

        

        {/* <!-- Back to Top --> */}
        {showBackToTop && (
        
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top" onClick={handleBackToTop}><i className="bi bi-arrow-up"></i></a>
      
          )}
    </div>

   <Footer/>
   </>
  )
}
