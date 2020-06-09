import React from 'react'
import Image from 'react-bootstrap/Image'

export default function About() {
  return (

    <div>
 

 <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h1 class="mt-5">Lifelong Learner</h1>


          <Image src="/img/dh.jpg" rounded className="float-left" style={{padding: 5, alignSelf: 'flex-start'}} />

            <div class="single-post-content-wrapper"> 
              <p>
                My name is Dylan Hulbert, and I am currently a student in the University of Oregon Full Stack Web Development bootcamp. 
              </p>
              <p>
                While I have been around technology strategy and software delivery for a while now, I wanted to learn something with practical application.  I wanted to know more about the work I support.  And, while I don't intend to change careers, 
                this program has provided the right level of detail and answered lots of questions that will help me in how I approach and evaluate solutions in the future.
              </p>
              <p>
                When I'm not at work or googling how to solve an issue with my homework, you can catch me out cycling, reading, yelling at my children, or snacking.
              </p>
            </div>
          <div class="mb-5"></div>
        </div>
      </div>
    </div>
  </section>


    </div>

  )
}
