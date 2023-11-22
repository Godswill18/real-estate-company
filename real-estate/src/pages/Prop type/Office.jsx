import React from 'react'
import Footer from '../../components/Footer/Footer'
import OfficeBody from '../../components/office Body/OfficeBody'
import '../../style.css';
import '../../bootstrap.css'
import '../../lib/animate/animate.css';
import '../../bootstrap.min.css';

export default function Office() {
  return (
  <>
  <div className="body">
  <OfficeBody/>
  </div>
  <Footer/>
  </>
  )
}
