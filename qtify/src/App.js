import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './Hero/Hero';
import Section from './Section/Section';

function App() {
  const [searchData, setSearchData] = useState([]);

  // Fetch search data from an API or define your static data here
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top'); 
        setSearchData(response.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar searchData={searchData}/>
        <Hero />
        <Section title={'Top Albums'} apiRoute={'https://qtify-backend-labs.crio.do/albums/top'}/>
      </div>
    </Router>
  );
}

export default App;
