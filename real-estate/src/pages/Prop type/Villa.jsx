import React from 'react'
import Footer from '../../components/Footer/Footer'
import VillaBody from '../../components/villa body/VillaBody'
import '../../style.css';
import '../../bootstrap.css'
import '../../lib/animate/animate.css';
import '../../bootstrap.min.css';

export default function Villa() {
  return (
    <>
    <div className="body">
    <VillaBody/>
    </div>
    <Footer/>
    </>
  )
}
