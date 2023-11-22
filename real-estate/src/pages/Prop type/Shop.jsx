import React from 'react'
import Footer from '../../components/Footer/Footer'
import ShopBody from '../../components/shop Body/ShopBody'
import '../../style.css';
import '../../bootstrap.css'
import '../../lib/animate/animate.css';
import '../../bootstrap.min.css';

export default function Shop() {
  return (
    <>
    <div className="body">
        <ShopBody/>
    </div>
    <Footer/>
    </>
  )
}
