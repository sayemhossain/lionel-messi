import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import {
  Bar,
  BarChart,
  LineChart,
  Legend,
  Tooltip,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  RadarChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  PolarGrid,
} from "recharts";

const Dashboard = () => {
  const [values, setValues] = useState([]);
  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
     Z`;
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  useEffect(() => {
    fetch("analysisData.json")
      .then((res) => res.json())
      .then((data) => setValues(data));
  }, []);
  return (
    <div className="bg-light dashboard">
      <div className=" py-5 container">
        <div className="row">
          <div className="col-lg-6">
            <BarChart width={350} height={300} data={values}>
              <XAxis dataKey="laliga_team" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="goal_with_laliga_team"
                fill="#8884d8"
                shape={<TriangleBar />}
              />
            </BarChart>
            <h5 className="mb-5 pe-md-5 me-md-5 text-center">
              Messi's goals against La Liga teams
            </h5>
          </div>
          <div className="col-lg-6 mt-5">
            <LineChart
              width={350}
              height={250}
              data={values}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="goal" stroke="#8884d8" />
            </LineChart>
            <h5 className="text-center mb-5 pe-md-5 me-md-5">
              Messi's goals and years
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <AreaChart
              width={350}
              height={350}
              data={values}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="investment"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
            <h5 className="ms-5 ps-5">Investment amount</h5>
          </div>
          <div className="col-lg-6 mt-4">
            <RadarChart outerRadius={90} width={350} height={250} data={values}>
              <PolarGrid />
              <PolarAngleAxis dataKey="month" />
              <PolarRadiusAxis angle={30} domain={[0, 150]} />
              <Radar
                name="Investment"
                dataKey="investment"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Radar
                name="Revenue"
                dataKey="revenue"
                stroke="#82ca"
                fill="#82ca"
                fillOpacity={0.9}
              />
              <Legend />
            </RadarChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
