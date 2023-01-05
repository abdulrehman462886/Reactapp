import React from "react";
import { useState, useEffect } from "react";

export default function Currentweather() {
  const [data, setData] = useState([""]);

  const getData = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=31.520370&lon=74.358749&appid=01df7646ebd1d71af2c4f78f747f263a"
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <ul>
          <li>
            <h2>
              City<pre>{JSON.stringify(data.name, null, 1)}</pre>
            </h2>
          </li>
          <li>
            <h2>
              Weather<pre>{JSON.stringify(data.main, null, 1)}</pre>
            </h2>
          </li>
        </ul>
      </div>
    </>
  );
}
