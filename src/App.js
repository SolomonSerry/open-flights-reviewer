import './App.css';
import Airlines from './componets/Airlines';
import axios from 'axios';
import FlightsReviewer from './componets/Airlines';
import { useState ,useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Airline from './componets/Airline';

const API_URL = "http://localhost:3000/api/v1/airlines.json"

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const [flights, setFlights] = useState([]);

  useEffect(()=> {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setFlights(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Airlines flights={flights}/>}/>
        <Route path="/airlines/:slug" element={<Airline flights={flights}/>}/>
      </Routes>
    </div>
  );
}

export default App;
