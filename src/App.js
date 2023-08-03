import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import './App.css'
import "./index.css";
const App = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Pune");
  useEffect(() => {
    const weather = async () => {
     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a69418d7be5e0fafea0ab90cff54d0e8`)
      .then(response=>{
        setCity(response.data.main);
      }) 
      .catch (error=> {
        console.error("Error fetching data:", error.message);
        setCity(null);
      });
    };
    weather();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputFeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}/>
        </div>
        {!city ? (
          <p className="errorMsg">NO DATA FOUND</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">{search}</h2>
              <h1 className="temp"> {city.temp}°Cel</h1>
            </div>
          </div>)}
      </div>
    </>
  );
};
export default App;
