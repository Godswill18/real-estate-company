import React from 'react';
import AbBody from '../../components/About body/AbBody';
import Footer from '../../components/Footer/Footer';
import './about.css';
import '../../style.css';
import '../../bootstrap.css'
import '../../lib/animate/animate.css';
import '../../bootstrap.min.css';

export default function About() {
  return (
    <>
    <div className="body">
        <AbBody/>
    </div>
    <Footer/>
    </>
  )
}
