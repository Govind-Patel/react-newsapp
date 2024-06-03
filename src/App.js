
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 9;
  apikey=process.env.REACT_APP_NEWS_APP
  state = {
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
        <div>
          <Router>
            <NavBar />
            <LoadingBar
              color='#f11946'
              progress={this.state.progress}
              
            />
            <Routes>
              {/* <Route path="/" element={<NavBar />} /> */}
              <Route path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} key="general" country={'in'} category={'general'}/>} />
              <Route path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} key="business" country={'in'} category={'business'}/>} />
              <Route path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} key="entertainment" country="in" category="entertainment" />} />
              <Route path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} key="general" country="in" category="general" />} />
              <Route path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} key="health" country="in" category="health" />} />
              <Route path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} key="science" country="in" category="science" />} />
              <Route path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} key="sports" country="in" category="sports" />} />
              <Route path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} key="technology" country="in" category="technology" />} />
            </Routes>
          </Router>
        </div>
      // <div>
      //   <NavBar />
      //   <News setProgress={this.setProgress}  pageSize={this.pageSize} country={'in'} category={'science'}/>
      // </div>
    )
  }
}

