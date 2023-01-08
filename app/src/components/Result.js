import React from "react";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "../cssFiles/results.css";
import { UserData } from "../Data";
import data from '../Data2.json';
import { Modal,Button } from "react-bootstrap";
import { useState } from "react";


const Result = ({ chartData }) => {
  const [show, setShow] = useState(false)
  console.log(data);

  const handleShow = ()=>{
    setShow(true)
  }

  const handleClose = ()=>{
    setShow(false)
  }

  return (
    <>
      <div class="resultsContainer">
        {/* <!-- Navbar --> */}
        <div class="logoNavbar">
          <div class="brandLogo"></div>
          <div class="burgerIcon"></div>
        </div>

        {/* <!-- Search Results --> */}
        <div className="searchResult">
          <div class="searchResultButtonDiv">SEARCH RESULTS FOR:</div>
          <div class="searchResultText">Raj Mittal</div>
          <div className="timeRequired" style={{fontSize:"15px"}}>5 s</div>
        </div>

        {/* Main Page */}
        <div className="fullContent">
        {/* Charts */}
        {/* Pie Graph */}
        <div class="netSentiment">
          <div className="chart pieChart" style={{ "width": "30%","height":"30%" }}>
          <div class="sentimentBlockText">NET SENTIMENT</div>
          <div className="chartMain">
            <Doughnut data={chartData}  />
          </div>
            {/* <Bar data={chartData} /> */}
          </div>


        {/* Bar Graph */}
          <div className="chart barChart"  style={{ "width": "50%","height":"50%" }}>
          <div class="sentimentBlockText">TOP 5 REVIEWS</div>
          <div className="chartMain">
            <Bar data={chartData} />
          </div>
            {/* <Pie data={chartData} /> */}
          </div>
          </div>

          {/* Articles Section */}
          <div className="articleSection">
            <div className="chart " style={{ width: 1000 }}>
            <div class="sentimentBlockText">ARTICLES</div>
            <div className="chartMain">
              {UserData.map((elem)=>{
                return (
                  <div key={elem.id} className="eachArticle">
                    <div className="newsChannel">{elem.newsChannel}</div>
                    <div className="theory">{(elem.info).slice(0,10)}</div>
                    <div className="positive">{elem.positive}</div>
                    <div className="neutral">{elem.neutral}</div>
                    <div className="negative">{elem.negative}</div>
                    <div className=""><button onClick={handleShow} className="readArticle">Read Article</button>
                    <Modal show={show} onHide={handleClose}>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
                  </div>)
              }) }
            </div>
            </div>
          </div>
          </div>
      </div>
    </>
  );
};

export default Result;
