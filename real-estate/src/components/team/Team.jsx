import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

export default function Team() {
  return (
    <div className="container-xxl py-5">
    <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h1 className="mb-3">Property Agents</h1>
            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>
        <div className="row g-4">
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
            {/* <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="team-item rounded overflow-hidden">
                    <div className="position-relative">
                        <img className="img-fluid" src="../../assets/img/team-2.jpg" alt=""/>
                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="text-center p-4 mt-3">
                        <h5 className="fw-bold mb-0">Full Name</h5>
                        <small>Designation</small>
                    </div>
                </div>
            </div> */}
            {/* <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="team-item rounded overflow-hidden">
                    <div className="position-relative">
                        <img className="img-fluid" src="../../assets/img/team-3.jpg" alt=""/>
                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="text-center p-4 mt-3">
                        <h5 className="fw-bold mb-0">Full Name</h5>
                        <small>Designation</small>
                    </div>
                </div>
            </div> */}
            {/* <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="team-item rounded overflow-hidden">
                    <div className="position-relative">
                        <img className="img-fluid" src="../../assets/img/team-4.jpg" alt=""/>
                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="text-center p-4 mt-3">
                        <h5 className="fw-bold mb-0">Full Name</h5>
                        <small>Designation</small>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
</div>
  )
}
