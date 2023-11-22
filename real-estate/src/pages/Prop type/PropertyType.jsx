import React from 'react'
import PropTypeBody from '../../components/PropertyBody/PropTypeBody'
import Footer from '../../components/Footer/Footer'
import '../../style.css';
import '../../bootstrap.css'
import '../../lib/animate/animate.css';
import '../../bootstrap.min.css';

export default function PropertyType() {
  return (
    <>
    <div className="body">
    <PropTypeBody/>
    </div>
    <Footer/>
    </>
  )
}
