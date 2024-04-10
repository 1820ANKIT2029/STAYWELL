import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Searchbar from "./components/searchbar"
import Carousel from './components/carousel';
function App() {
  return (
    <div className="App">
      
      
      <Header/>
      <Searchbar/>
      <Carousel/>
      
    </div>
  );
}

export default App;
