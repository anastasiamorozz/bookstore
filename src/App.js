import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import MainBanner from './components/MainBanner/MainBanner';
import { NewBooks } from './components/NewBooks/NewBooks';
import AuthorBanner from './components/AuthorBanner/AuthorBanner';
import DiscountBanner from './components/DiscountBanner/DiscountBanner';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <NewBooks />
      <AuthorBanner />
      <DiscountBanner />
      <Footer />
    </div>
  );
}

export default App;
