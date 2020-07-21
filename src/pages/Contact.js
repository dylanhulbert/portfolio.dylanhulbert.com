import React from 'react'
import './contact.css';

export default function Contact() {
  return (

<section>
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <h1 className="mt-5">Contact Me</h1>
        <p>
          I mean, if you're bored:
        </p><p>Email: <a href="mailto://dylan@dylanhulbert.com" style={{color: "#343a40"}}>dylan@dylanhulbert.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/dylanhulbert/" style={{color: "#343a40"}}>https://www.linkedin.com/in/dylanhulbert/</a></p>
        <p>GitHub: <a href="https://github.com/dylanhulbert" style={{color: "#343a40"}}>https://github.com/dylanhulbert</a></p>
        <p>And, a link to my <a href="http://hulbert.io/assets/res/resume.pdf" target="resume_" style={{color: "#343a40"}}>resume</a></p>
        <div className="mb-5" />        
      </div>
    </div>
  </div>
</section>

  )
}