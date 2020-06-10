import React from 'react';
import './style.css';

export default function Portfolio() {
  return (

    
    <div>

      <section id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="mt-5">Bootcamp Portfolio</h1>
              <p>
                Some of the technologies we've studied include:
              </p>
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <ul>
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>
                  <div className="col-sm">
                    <ul>
                      <li>Sequelize</li>
                      <li>MySQL</li>
                      <li>jQuery</li>
                    </ul>
                  </div>
                  <div className="col-sm">
                    <ul>
                      <li>HTML/CSS</li>
                      <li>Bootstrap</li>
                      <li>Semantic UI</li>
                    </ul>
                  </div> 
                </div>
              </div>
              <p>
                A sample of the work I've completed as part of the program:
              </p>
            </div>  
            <div className="col-lg-12 text-dark">
              <div className="row">
                <div className="col-lg mb-4">
                  <div className="card h-100 text-center text-dark">
                    <a href="https://dylanhulbert.github.io/project-01" target="_card1" className="link"><img className="card-img-top p-2" src="/img/1.png" alt="Screenshot of Explore Cascadia Homepage" /></a>
                    <div className="card-body">
                      <h4 className="card-title">Explore Cascadia</h4>
                      <h6 className="card-subtitle mb-2"><a href="https://github.com/dylanhulbert/project-01" target="_card1p">Project One <i className="fab fa-github" /></a></h6>
                      <p className="card-text">This <a href="https://github.com/laurendoss">team</a> project called multiple external APIs and used jQuery, JavaScript, and Semantic UI</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg mb-4">
                  <div className="card h-100 text-center text-dark">
                    <a href="https://hulbert-homework-11.herokuapp.com" target="_card2"><img className="card-img-top p-2" src="/img/2.png" alt="Screenshot of Explore Cascadia Homepage" /></a>
                    <div className="card-body">
                      <h4 className="card-title">Eat a Burger</h4>
                      <h6 className="card-subtitle mb-2"><a href="https://github.com/dylanhulbert/homework-11" target="_card2p">Homework 11 <i className="fab fa-github" /></a></h6>
                      <p className="card-text">This MVC project written in JavaScript, uses Node, MySQL, Express.js, and Handlebars</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg mb-4">
                  <div className="card h-100 text-center text-dark">
                    <a href="https://team-project-02.herokuapp.com" target="_card3"><img className="card-img-top p-2" src="/img/3.png" alt="Screenshot of Explore Cascadia Homepage" /></a>
                    <div className="card-body">
                      <h4 className="card-title">Explore Cocktails</h4>
                      <h6 className="card-subtitle mb-2"><a href="https://github.com/dylanhulbert/project-02" target="_card3p">Project Two <i className="fab fa-github" /></a></h6>
                      <p className="card-text">Another <a href="https://github.com/laurendoss">team</a> project.  This one we used Node, Sequelize, Express, and again with Semantic UI</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5" />
            </div>
          </div>
        </div>
      </section>



    </div>

  )
}