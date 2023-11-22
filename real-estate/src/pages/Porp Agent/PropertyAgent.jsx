import React from 'react'
import Footer from '../../components/Footer/Footer'
import PropAgentBody from '../../components/PropertyBody/PropAgentBody'
import './propertyAgent.css'
import '../../style.css';
import '../../bootstrap.css'
import '../../lib/animate/animate.css';
import '../../bootstrap.min.css';

export default function PropertyAgent() {
  return (
    <>
    <div className="body">
    <PropAgentBody/>
    </div>
    <Footer/>
    </>
  )
}
