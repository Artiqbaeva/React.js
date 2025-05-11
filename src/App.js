import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import Products from './components/products/Products';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
       <Products/>
    </div>
  );
}

export default App;