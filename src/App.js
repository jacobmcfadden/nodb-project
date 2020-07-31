import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
      <header className="fixed-top">
      <nav className="navbar bg-primary" id="mainNav">
        <div className="container">
          <div className="app-title">
            <img className="logo" src={logo} alt="" />
          </div>
          <div className="navbar-collapse">
            <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item"><a className="nav-link" href="#dashboard" onClick={this.toggleMenu}>Dashboard</a></li>
                <li className="nav-item"><a className="nav-link" href="#search" onClick={this.toggleMenu}>Search</a></li>
                <li className="nav-item"><a className="nav-link" href="#reports" onClick={this.toggleMenu}>Reports</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar bg-light" id="mainNav">
        <div className="container">
        <div className="app-title">
            
            <a className="page-title" href="#dashboard" onClick={this.toggleMenu}>Search</a>
          </div>
          <div className="collapse navbar-swap">
            
          </div>
        </div>
      </nav>
      </header>
      <main className="bg-primary">

      </main>
    </div>
  );
}
}

export default App;
