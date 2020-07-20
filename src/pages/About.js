import React from 'react'
import Image from 'react-bootstrap/Image'

export default function About() {
  return (

 <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h1 class="mt-5">Lifelong Learner</h1>

          <Image src="/img/dh.jpg" rounded className="float-left" style={{padding: 5, alignSelf: 'flex-start'}} />

            <div class="single-post-content-wrapper"> 

              <p>
                My name is Dylan Hulbert, and I recently (July 2020) completed a full stack web development bootcamp with the University of Oregon. 
              </p>
              <p>
                While I have been around technology strategy and software delivery for a while now, I've always wanted to learn something technical that had practical application.  And, after getting experience with MERN fundamentals and becoming familiar with the React community, I've found a new hobby.
              </p>
              <p>
                When I'm not at (home like everyone else) work, you can catch me out cycling, reading, or snacking.
              </p>

            </div>
        </div>
      </div>
    </div>
  </section>

  )
}
