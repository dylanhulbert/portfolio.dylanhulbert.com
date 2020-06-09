import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navigation from './pages/Navigation'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

export default function App() {
  return (
    <div>
      <Navigation />
    
  <Switch>
    <Route exact path="/" component={About} />
    <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/contact" component={Contact} />
  </Switch>

    <Footer />
    </div>
  )
}
