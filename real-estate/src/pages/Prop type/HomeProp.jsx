import React from 'react'
import Footer from '../../components/Footer/Footer';
import HpBody from '../../components/homeProp Body/HpBody'
import '../../style.css';
import '../../bootstrap.css'
import '../../lib/animate/animate.css';
import '../../bootstrap.min.css';

export default function HomeProp() {
  return (
    <>
    <div className="body">
        <HpBody/>
    </div>
    <Footer/>
    </>
  )
}
