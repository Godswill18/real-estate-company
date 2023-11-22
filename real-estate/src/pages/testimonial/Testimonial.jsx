import React from 'react'
import Footer from '../../components/Footer/Footer'
import TestBody from '../../components/TestBody/TestBody';
import './testimonial.css'
import '../../style.css';
import '../../bootstrap.css'
import '../../lib/animate/animate.css';
import '../../bootstrap.min.css';

export default function Testimonial() {
  return (
    <>
    <div className="body">
        <TestBody/>
    </div>
    <Footer/>
    </>
  )
}
