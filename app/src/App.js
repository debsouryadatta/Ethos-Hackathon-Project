import "./App.css";
import BarChart from "./components/BarChart";
import { useState } from "react";
import { UserData } from "./Data";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Result from "./components/Result";


function App() {
  // let color;
  // UserData.map((data) => {
  //   if (data.type === "positive") color = "green";
  //   else if (data.type === "neutral") color = "yellow";
  //   else if (data.type === "negative") color = "red";
  // });

  // For Piechart
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#45D792","#F6E63C","#DB4276"],
        // backgroundColor: UserData.map((data) => {
        //   if (data.type === "positive") ["green"] ;
        //   else if (data.type === "neutral") ["yellow"];
        //   else if (data.type === "negative") ["red"];

        // }),
        borderColor: "black",
        borderWidth: 0,
      },
    ],
  });
  
  // For BAr chart
  const [userData2, setUserData2] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#45D792","#F6E63C","#DB4276"],
        // backgroundColor: UserData.map((data) => {
        //   if (data.type === "positive") ["green"] ;
        //   else if (data.type === "neutral") ["yellow"];
        //   else if (data.type === "negative") ["red"];

        // }),
        borderColor: "black",
        // borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <Router>
        {/* <div style={{width : 700}}>
      <BarChart chartData={userData} />
      <LineChart chartData={userData} />
      <PieChart chartData={userData} />
      </div> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Result chartData={userData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
