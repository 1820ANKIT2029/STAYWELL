// import logo from './logo.svg';

import Header from '../header';
import Searchbar from "../searchbar"
import Carousel from '../carousel';
import Features from "../features"
function Home() {
  return (
    <div className="App">
      
      
      <Header/>
      <div className = "move">
        <Searchbar/>
        <Carousel />
      </div>
      <Features/>
    </div>
  );
}

export default Home;
