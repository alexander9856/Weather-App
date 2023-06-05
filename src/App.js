import './App.css';
import { Home } from './components/Home/Home';
import { Weather } from './contexts/WeatherContext'

function App() {
  return (
    <Weather>
      <Home />
    </Weather>
  );
}

export default App;
