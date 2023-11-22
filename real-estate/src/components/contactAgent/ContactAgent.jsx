import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import './contactAgent.css'


export default function ContactAgent() {
  return (
    <div className="container-xxl py-5">
            <div className="container">
                <div className="bg-light rounded p-3">
                    <div className="bg-white rounded p-4" style={{border: '1px dashed rgba(0, 185, 142, .3)'}}>
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <img className="img-fluid rounded w-100" src="../../assets/img/call-to-action.jpg" alt=""/>
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <div className="mb-4">
                                    <h1 className="mb-3">Contact With Our Certified Agent</h1>
                                    <p>Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo.</p>
                                </div>
                                <a href='tel:+234-807-984-3784'target='blank' className="btn btn-primary py-3 px-4 me-2" ><FontAwesomeIcon className='pIcon' icon={faPhone} style={{color: "#fcfcfc",}} />Make A Call</a>
                                <a href="https://wa.me/2348079843784" target='blank' className="btn btn-dark py-3 px-4"><FontAwesomeIcon className='pIcon' icon={faCalendarDays} style={{color: "#f2f2f2",}} />Get Appoinment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
