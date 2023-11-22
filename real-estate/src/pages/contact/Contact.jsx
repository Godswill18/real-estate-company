import React from 'react'
import Footer from '../../components/Footer/Footer'
import ContactBody from '../../components/contact Body/ContactBody'
import '../../style.css';
import '../../bootstrap.css'
import '../../lib/animate/animate.css';
import '../../bootstrap.min.css';

export default function Contact() {
  return (
    <>
    <div className="body">
        <ContactBody/>
    </div>

    <Footer/>
    </>
  )
}
