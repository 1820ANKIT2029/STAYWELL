// import logo from './logo.svg';

import Header from '../header';
import Searchbar from "../searchbar"
import Carousel from '../carousel.js';
import Features from "../features"
import Footer from '../footer';
function Home() {
  return (
    <div className="App">
      
      
      <Header/>
      {/* padding of search bar and the carousel at carousel.css */}
      <div className = "move" id='home-padding'> 
        <Searchbar/>
        <Carousel />
      </div>
      <Features/>
      <Footer/>
    </div>
  );
}

export default Home;
