import './App.css';
import Airlines from './componets/Airlines/Airlines';
import Airline from './componets/Airline/Airline';
import { Route, Routes } from 'react-router-dom';

function App() {
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
