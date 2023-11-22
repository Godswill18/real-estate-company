import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
// import ContactAgent from '../contactAgent/ContactAgent';
import './about.css';
import Card from 'react-bootstrap/Card';
import Partners from '../our Partners/Partners';



export default function AbBody() {
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
        {/* <!-- Spinner Start -->  */}
        <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
                {/* <span class="sr-only">Loading...</span> */}
            </div>
        </div>
        {/* <!-- Spinner End -->


        {/* <!-- Header Start --> */}

            <div className="backgroundAb">
                <div className="aboutH1"><h1>About Us</h1></div>
                <div className="aboutParagraph">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis quo asperiores expedita 
                        illo consectetur, adipisci saepe voluptate? Eius, aliquam culpa voluptatibus vitae veniam
                         repudiandae odio magnam consequuntur voluptatum. Ea, soluta?</p>
                </div>
            <div className="goal">
                <div className="firstCard">
                <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="../../assets/img/vision.jpeg" />
                        <Card.Body>
                            <Card.Title>Vision</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>

                <div className="secondCard">
                <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="../../assets/img/vision.jpeg" />
                        <Card.Body>
                            <Card.Title>Mission</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>

                <div className="thirdCard">
                <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="../../assets/img/vision.jpeg" />
                        <Card.Body>
                            <Card.Title>Our Core Values</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>
            </div>

            </div>


        {/* <div class="container-fluid header bg-white p-0">
            <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div class="col-md-6 p-5 mt-lg-5">
                    <h1 class="display-5 animated fadeIn mb-4">About Us</h1> 
                        <nav aria-label="breadcrumb animated fadeIn">
                        <ol class="breadcrumb text-uppercase">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">About</a></li>
                      
                        </ol>
                    </nav>
                </div>
                <div class="col-md-6 animated fadeIn">
                    <img class="img-fluid" src="../../assets/img/header.jpg" alt=""/>
                </div>
            </div>
        </div> */}
        {/* <!-- Header End --> */}

            
        {/* <!-- Search Start --> */}
        {/* <div class="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{padding: '35px'}}>
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
        </div> */}
        {/* <!-- Search End --> */}

        


        {/* <!-- About Start --> */}
        <div class="container-xxl about1 py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div class="about-img position-relative overflow-hidden p-5 pe-0">
                            <img class="img-fluid w-100" src="../../assets/img/about.jpg"/>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 class="mb-4">#1 Place To Find The Perfect Property</h1>
                        <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <p><i class="fa fa-check text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
                        <p><i class="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
                        <p><i class="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet</p>
                        
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}


        {/* <!-- Team Start --> */}
        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                    <h1 class="mb-3">Property Agents</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div class="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="../../assets/img/ceo.jpg" alt=""/>
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                            <Link className="btn btn-square mx-1" to={'https://instagram.com/tonierleton?igshid=NzZlODBkYWE4Ng=='} target='blank'><FontAwesomeIcon icon={faInstagram} /></Link>
                            <Link className="btn btn-square mx-1" to={'https://www.facebook.com/tonier.leton?mibextid=ZbWKwL'} target='blank'><FontAwesomeIcon icon={faFacebook} /></Link>
                            <Link className="btn btn-square mx-1" to={'https://wa.me/2348079843784'} target='blank' ><FontAwesomeIcon icon={faWhatsapp}/></Link>
    
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Tonia Nwobum</h5>
                                <small>Nigeria</small>
                            </div>
                        </div>
                    </div>
                    {/* <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="team-item rounded overflow-hidden">
                            <div class="position-relative">
                                <img class="img-fluid" src="../../assets/img/team-2.jpg" alt=""/>
                                <div class="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div class="text-center p-4 mt-3">
                                <h5 class="fw-bold mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="team-item rounded overflow-hidden">
                            <div class="position-relative">
                                <img class="img-fluid" src="../../assets/img/team-3.jpg" alt=""/>
                                <div class="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div class="text-center p-4 mt-3">
                                <h5 class="fw-bold mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div class="team-item rounded overflow-hidden">
                            <div class="position-relative">
                                <img class="img-fluid" src="../../assets/img/team-4.jpg" alt=""/>
                                <div class="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div class="text-center p-4 mt-3">
                                <h5 class="fw-bold mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        {/* <!-- Team End --> */}


            {/* our partners start */}
                   <Partners/>
            {/* our partners end */}
   
        

       

        {/* <!-- Back to Top --> */}
        {showBackToTop && (
        
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top" onClick={handleBackToTop}><FontAwesomeIcon icon={faAngleUp} style={{color: "#ffffff",}} /></a>
      
          )}
    </div>
  )
}
