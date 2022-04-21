import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import BookScreen from './screens/BookScreen'


const App = () => {


  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Switch>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/books/:id' component={BookScreen} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>


  )
}






export default App
