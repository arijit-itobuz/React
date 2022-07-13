import React, { Component } from 'react'

export default class NavBar extends Component {

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <img src="/logo192.png" alt="Open-News-logo" height="40" />
            <a className="navbar-brand fw-bold fs-4 ms-2 me-4" href="/">Open News</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
