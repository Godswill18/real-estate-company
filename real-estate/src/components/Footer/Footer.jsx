import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import './footer.css';
import '../.././style.css';
import '../.././bootstrap.css'
import '../.././lib/animate/animate.css';
import '../.././bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
   <>
     {/* <!-- Footer Start --> */}
     <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Get In Touch</h5>
                        <p className="mb-2"> <FontAwesomeIcon icon={faLocationDot} className="fa fa-map-marker-alt me-3" />Lagos, Nigeria</p>
                        <p className="mb-2"><FontAwesomeIcon icon={faPhone} className='fa fa-phone-alt me-3' />+012 345 67890</p>
                        <p className="mb-2"> <FontAwesomeIcon icon={faEnvelope} className='fa fa-phone-alt me-3' />tnwobum@yahoo.com</p>
                        <div className="d-flex pt-2">
                           <Link className="btn btn-outline-light btn-social" to={'https://instagram.com/tonierleton?igshid=NzZlODBkYWE4Ng=='} target='blank'><FontAwesomeIcon icon={faInstagram} /></Link>
                            <Link className="btn btn-outline-light btn-social" to={'https://www.facebook.com/tonier.leton?mibextid=ZbWKwL'} target='blank'><FontAwesomeIcon icon={faFacebook} /></Link>
                            <Link className="btn btn-outline-light btn-social" to={'https://wa.me/2348079843784'} target='blank' ><FontAwesomeIcon icon={faWhatsapp}/></Link>
                            {/* <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a> */}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Quick Links</h5>
                        <a className="btn btn-link text-white-50" href="about"> About Us</a>
                        <a className="btn btn-link text-white-50" href="contact">Contact Us</a>
                        <a className="btn btn-link text-white-50" href="about">Our Services</a>
                        <a className="btn btn-link text-white-50" href="#">Privacy Policy</a>
                        <a className="btn btn-link text-white-50" href="#">Terms & Condition</a>
                    </div>
                    {/* <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Photo Gallery</h5>
                        <div className="row g-2 pt-2">
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="../../assets/img/property-1.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="../../assets/img/property-2.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="../../assets/img/property-3.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="../../assets/img/property-4.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="../../assets/img/property-5.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="../../assets/img/property-6.jpg" alt=""/>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Newsletter</h5>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto" style={{maxwidth: '400px'}}>
                            <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                       <p className='copyright'>Copyright &copy; {currentYear} Leton Realty Home And Investment Ltd.</p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="/">Home</a>
                                {/* <a href="">Cookies</a> */}
                                <a href="/contact">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End --> */}
   </>
  )
}
