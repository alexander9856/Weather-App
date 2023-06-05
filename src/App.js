import './App.css';
import { Search } from './components/Search/Search';
import { Main } from './components/Main/Main';
import { Weather } from './contexts/WeatherContext'

function App() {

  return (
    <div className='container'>
      <Weather>
        <Search />
        <Main />
      </Weather>
    </div>

  );
}

export default App;
