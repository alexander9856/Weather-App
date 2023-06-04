import './App.css';
import { Search } from './components/Search/Search';
import { Main } from './components/Main/Main';

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }
  return (
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange} />
      <Main />
    </div>

  );
}

export default App;
