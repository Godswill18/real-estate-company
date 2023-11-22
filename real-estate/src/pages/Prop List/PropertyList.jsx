import React from 'react'
import Footer from '../../components/Footer/Footer'
import PropListBody from '../../components/PropertyBody/PropListBody'
import './propertyList.css'
import '../../style.css';
import '../../bootstrap.css'
import '../../lib/animate/animate.css';
import '../../bootstrap.min.css';

export default function PropertyList() {
  return (
    <>
    <div className="body">
    <PropListBody/>
    </div>
    <Footer/>
    </>
  )
}
