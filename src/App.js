import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/NavBar';
import News from './components/News';
import About from './components/About';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="home" title="Home" pageSize={20} country={"in"} category={"general"} />} />
          <Route exact path="/business" element={<News key="business" title="Business" pageSize={20} country={"in"} category={"business"} />} />
          <Route exact path="/entertainment" element={<News key="entertainment" title="Entertainment" pageSize={20} country={"in"} category={"entertainment"} />} />
          <Route exact path="/health" element={<News key="health" title="Health" pageSize={20} country={"in"} category={"health"} />} />
          <Route exact path="/science" element={<News key="science" title="Science" pageSize={20} country={"in"} category={"science"} />} />
          <Route exact path="/sports" element={<News key="sports" title="Sports" pageSize={20} country={"in"} category={"sports"} />} />
          <Route exact path="/technology" element={<News key="technology" title="Technology" pageSize={20} country={"in"} category={"technology"} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>

    )
  }
}



