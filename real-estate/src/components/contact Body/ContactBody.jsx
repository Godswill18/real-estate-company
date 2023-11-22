import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import {faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

export default function ContactBody() {
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
        <div class="spinner-border text-primary" style={{width: '3rem', height: '3rem;'}} role="status">
            {/* <span class="sr-only">Loading...</span> */}
        </div>
    </div>
    {/* <!-- Spinner End --> */}


  


    {/* <!-- Header Start --> */}
    <div class="container-fluid header bg-white p-0">
        <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
            <div class="col-md-6 p-5 mt-lg-5">
                <h1 class="display-5 animated fadeIn mb-4">Contact Us</h1> 
                    <nav aria-label="breadcrumb animated fadeIn">
                    <ol class="breadcrumb text-uppercase">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Contact</a></li>
                    </ol>
                </nav>
            </div>
            <div class="col-md-6 animated fadeIn">
                <img class="img-fluid" src="../../assets/img/header.jpg" alt=""/>
            </div>
        </div>
    </div>
    {/* <!-- Header End --> */}


    {/* <!-- Search Start --> */}
    <div class="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{padding: '35px'}}>
        <div class="container">
           
        </div>
    </div>
    {/* <!-- Search End --> */}


    {/* <!-- Contact Start --> */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                <h1 class="mb-3">Contact Us</h1>
                <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div class="row g-4">
                <div class="col-12">
                    <div class="row gy-4">
                        <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <div class="bg-light rounded p-3">
                                <div class="d-flex align-items-center bg-white rounded p-3" style={{border: '1px dashed rgba(0, 185, 142, .3)'}}>
                                    <div class="icon me-3" style={{width: '45px', height: '45px'}}>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    </div>
                                    <span>Lagos, Nigeria</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div class="bg-light rounded p-3">
                                <div class="d-flex align-items-center bg-white rounded p-3" style={{border: '1px dashed rgba(0, 185, 142, .3)'}}>
                                    <div class="icon me-3" style={{width: '45px', height: '45px'}}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <span>tnwobum@yahoo.com</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div class="bg-light rounded p-3">
                                <div class="d-flex align-items-center bg-white rounded p-3" style={{border: '1px dashed rgba(0, 185, 142, .3)'}}>
                                    <div class="icon me-3" style={{width: '45px', height: '45px'}}>
                                    <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                    <span>+234 8079843784 </span>
                                    <br />
                                    <span>+234 8063614533</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <iframe class="position-relative rounded w-100 h-100"
                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.46316678578!2d3.1188019060617376!3d6.54836925468041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1700046600396!5m2!1sen!2sng" width="600" height="450" 
                        style={{border:'0'}} allowfullscreen=""
                         loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="col-md-6">
                    <div class="wow fadeInUp" data-wow-delay="0.5s">
                        <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Consectetur obcaecati iste rem exercitationem iusto deleniti, facere facilis sed ducimus nesciunt 
                         doloribus maiores,
                         quas, odit illum maxime tempora accusamus eius. Enim?</p>
                        <form>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="name" placeholder="Your Name"/>
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control" id="email" placeholder="Your Email"/>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="subject" placeholder="Subject"/>
                                        <label for="subject">Subject</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a message here" id="message" style={{height: '150px'}}></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact End --> */}


    {/* <!-- Back to Top --> */}
    {showBackToTop && (
        
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top" onClick={handleBackToTop}><FontAwesomeIcon icon={faAngleUp} style={{color: "#ffffff",}} /></a>
      
          )}
</div>
  )
}
