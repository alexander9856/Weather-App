import './App.css';
import { Error404 } from './components/Error404/Error404';
import { Home } from './components/Home/Home';
import { Weather } from './contexts/WeatherContext'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <Weather>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </Weather>
  );
}

export default App;
