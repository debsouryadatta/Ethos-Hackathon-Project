import {React,useState} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
// import { useState } from "react";



const Home = () => {
  const [input, setInput] = useState("")

  const requestAPI = async () => {
    try {
      const res = await axios.get(`https://7d42-35-221-12-28.ngrok.io/api/search/?input=${input}`)
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
        {/* <!-- Navabar --> */}
    <nav className="navbar navbar-dark fixed-top my-5">
      <div className="container">
        <a  className="navbar-brand img" href="/results.html">
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                RuntimeTerror!
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>



    {/* <!-- Hero Section --> */}
    <div className="px-4 py-5  text-center hero">
        {/* <!-- <img className="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> --> */}
        <h1 className="display-5 fw-bold">Web Scraping meets NLP</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mt-4 mb-4">Search for sentiments associated with a name with visualizatios including charts and graphs.</p>
        </div>
      </div>


      {/* <!-- Search BAr --> */}
      <div className="Search d-flex justify-content-center">
      <div className="search">
        <input onChange={(e)=> setInput(e.target.value) } type="search" className="contain form-control" placeholder="Search..." aria-label="Search" />
        {/* <a className="btn btn-info" href="/results.html">Search</a> */}
        <Link className="btn btn-info" onClick={requestAPI}> Search </Link>
      </div>
    </div>
    </>
  )
}

export default Home