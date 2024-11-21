import Header from './components/Header/Header.jsx';
import MainBanner from './components/MainBanner/MainBanner.jsx';
import { NewBooks } from './components/NewBooks/NewBooks.jsx';
import AuthorBanner from './components/AuthorBanner/AuthorBanner.jsx';
import DiscountBanner from './components/DiscountBanner/DiscountBanner.jsx';
import Footer from "./components/Footer/Footer.jsx";


function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <NewBooks/>
      <AuthorBanner />
      <DiscountBanner/>
      <Footer/>
    </div>
  );
}

export default App;
