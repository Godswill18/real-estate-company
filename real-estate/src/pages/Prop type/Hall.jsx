import React from 'react'
import Footer from '../../components/Footer/Footer'
import HallBody from '../../components/Hall Body/HallBody'
import '../../style.css';
import '../../bootstrap.css'
import '../../lib/animate/animate.css';
import '../../bootstrap.min.css';

export default function Hall() {
  return (
    <>
    <div className="body">
        <HallBody/>
    </div>
    <Footer/>
    </>
  )
}
