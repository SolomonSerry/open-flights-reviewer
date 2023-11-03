import './App.css';
import Airlines from './componets/Airlines/Airlines';
import Airline from './componets/Airline/Airline';
import { Route, Routes } from 'react-router-dom';

// const API_URL = "http://localhost:3000/api/v1/airlines.json"

// function getAPIData() {
//   return axios.get(API_URL).then((response) => response.data)
// }

function App() {
  // const [flights, setFlights] = useState([]);

  // useEffect(()=> {
  //   let mounted = true;
  //   getAPIData().then((items) => {
  //     if (mounted) {
  //       setFlights(items);
  //     }
  //   });
  //   return () => (mounted = false);
  // }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Airlines />}/>
        <Route path="/airlines/:slug" element={<Airline />}/>
      </Routes>
    </div>
  );
}

export default App;
