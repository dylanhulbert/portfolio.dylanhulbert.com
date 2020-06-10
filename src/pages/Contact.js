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
        </p><p>Email: <a href="mailto://dylan@dylanhulbert.com">dylan@dylanhulbert.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/dylanhulbert/">https://www.linkedin.com/in/dylanhulbert/</a></p>
        <p>GitHub: <a href="https://github.com/dylanhulbert">https://github.com/dylanhulbert</a></p>
        <p>Cell: </p>
        <p>And, a link to my <a href="http://hulbert.io/assets/res/resume.pdf" target="resume_">resume</a></p>
        <p />
        <div className="mb-5" />        
      </div>
    </div>
  </div>
</section>

  )
}