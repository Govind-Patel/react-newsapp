
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends Component {
  pageSize = 9;
  render() {
    return (
        <div>
          <Router>
            <NavBar />
            <Routes>
              {/* <Route path="/" element={<NavBar />} /> */}
              <Route path="/" element={<News  pageSize={this.pageSize} key="general" country={'in'} category={'general'}/>} />
              <Route path="/business" element={<News  pageSize={this.pageSize} key="business" country={'in'} category={'business'}/>} />
              <Route path="/entertainment" element={<News pageSize={this.pageSize} key="entertainment" country="in" category="entertainment" />} />
              <Route path="/general" element={<News pageSize={this.pageSize} key="general" country="in" category="general" />} />
              <Route path="/health" element={<News pageSize={this.pageSize} key="health" country="in" category="health" />} />
              <Route path="/science" element={<News pageSize={this.pageSize} key="science" country="in" category="science" />} />
              <Route path="/sports" element={<News pageSize={this.pageSize} key="sports" country="in" category="sports" />} />
              <Route path="/technology" element={<News pageSize={this.pageSize} key="technology" country="in" category="technology" />} />
            </Routes>
          </Router>
        </div>
      // <div>
      //   <NavBar />
      //   <News pageSize={this.pageSize} country={'in'} category={'science'}/>
      // </div>
    )
  }
}

