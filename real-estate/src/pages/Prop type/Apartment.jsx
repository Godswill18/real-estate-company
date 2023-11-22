import React from 'react'
import Footer from '../../components/Footer/Footer'
import ApBody from '../../components/apartment Body/ApBody'
import '../../style.css';
import '../../bootstrap.css'
import '../../lib/animate/animate.css';
import '../../bootstrap.min.css';

export default function Apartment() {
  return (
    <>
    <div className="body">
        <ApBody/>
    </div>
    <Footer/>
    </>
  )
}
