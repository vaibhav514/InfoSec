import axios from "axios";
import React, { useState } from "react";
import BreadCrumps from "../../components/BreadCrumps";
import "./whois.css";

function GeoLocator() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://ip-api.com/json/${query}`);
      setResult(response.data);
    } catch (error) {
      console.error("Error fetching WHOIS information:", error);
      setResult(null);
    }
  };

  return (
    <div className="whois-full">
      <BreadCrumps page="Tools/Geolocator" title="GeoLocator" />
      <div className="whois-container">
        <h1>Type IP/Domain</h1>
        <form>
          <input
            type="text"
            placeholder="Enter URL or IP address"
            value={query}
            onChange={handleChange}
            className="wtext"
          />
          <p>
            <button onClick={handleSubmit} className="wbtn" type="submit">
              Search
            </button>
          </p>
        </form>
        {result && (
          <div className="wres">
            <h2>Result:</h2>
            {console.log(result)}
            <p>IP Address: {result.query}</p>
            <p>Organization: {result.org}</p>
            <p>Country: {result.country}</p>
            <p>Region: {result.regionName}</p>
            <p>City: {result.city}</p>
            <p>ISP: {result.isp}</p>
            <p>
              Cordinates: {result.lat}, {result.lon}
            </p>
            {/* Add more fields as needed */}
          </div>
        )}
      </div>
    </div>
  );
}

export default GeoLocator;
