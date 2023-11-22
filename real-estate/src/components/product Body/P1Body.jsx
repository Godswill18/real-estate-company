import React, { useState } from 'react';
import './p1Body.css';

export default function P1Body() {
  const [imageSrc, setImageSrc] = useState('../../assets/img/carousel-2.jpg');
  const [backgroundColor, setBackgroundColor] = useState('');

  function img(newImageSrc) {
    setImageSrc(newImageSrc);
  }

  function change(newBackgroundColor) {
    setBackgroundColor(newBackgroundColor);
  }

  return (
    <section>
      <div className="containerX flexX">
        <div className="leftX">
          <div className="main_imageX">
            <img alt='' src={imageSrc} className="slideX" />
          </div>
          
          <div className="optionX flexX">
            <img src="'../../assets/img/property-1.jpg" alt='1' onClick={() => img('../../assets/img/property-1.jpg')} />
            <img src="../../assets/img/carousel-1.jpg" alt='2' onClick={() => img('../../assets/img/carousel-1.jpg')} />
            <img src="../../assets/img/property-1.jpg" alt='3' onClick={() => img('../../assets/img/property-1.jpg')} />
            <img src="../../assets/img/carousel-1.jpg" alt='4' onClick={() => img('../../assets/img/carousel-1.jpg')} />
            <img src="../../assets/img/carousel-1.jpg" alt='5' onClick={() => img('../../assets/img/carousel-1.jpg')} />
            <img src="../../assets/img/carousel-1.jpg" alt='6' onClick={() => img('../../assets/img/carousel-1.jpg')} />
          </div>
        </div>
        <div className="rightX" style={{ background: backgroundColor }}>
          <h3 className='h3'>PROPERTY DESCRIPTION</h3>
        
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h4><small>₦</small> 99,809,990.99</h4>
          <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.46316678578!2d3.1188019060617376!3d6.54836925468041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1699644234475!5m2!1sen!2sng" width="400" height="300" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

         
        </div>
      </div>
      {/* <!-- Call to Action Start --> */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="bg-light rounded p-3">
                <div class="bg-white rounded p-4" style={{border: '1px dashed rgba(0, 185, 142, .3)'}}>
                    <div class="row g-5 align-items-center">
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <img class="img-fluid rounded w-100" src="img/call-to-action.jpg" alt=""/>
                        </div>
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div class="mb-4">
                                <h1 class="mb-3">Contact With Our Certified Agent</h1>
                                <p>Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo.</p>
                            </div>
                            <a href="" class="btn btn-primary py-3 px-4 me-2"><i class="fa fa-phone-alt me-2"></i>Make A Call</a>
                            <a href="" class="btn btn-dark py-3 px-4"><i class="fa fa-calendar-alt me-2"></i>Get Appoinment</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Call to Action End --> */}
    
    </section>

    

    
  );
}
