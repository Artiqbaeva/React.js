import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero'
import Products from './components/products/Products';
import Footer from './components/footer/Footer'
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
       <Products/>
       <Footer/>
    </div>
  );
}

export default App;