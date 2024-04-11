// import logo from './logo.svg';

import Header from '../header';
import Searchbar from "../searchbar"
import Carousel from '../carousel';
import Features from "../features"
import Footer from '../footer';
function Home() {
  return (
    <div className="App">
      
      
      <Header/>
      <div className = "move">
        <Searchbar/>
        <Carousel />
      </div>
      <Features/>
      <Footer/>
    </div>
  );
}

export default Home;
