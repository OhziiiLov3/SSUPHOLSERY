import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import About from "./components/About";
// import Contact from "./components/Contact"
import VolkswagenScreen from './screens/VolkswagenScreen';


function App() {
  return (
    <Router>
      <NavbarComponent />
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/volkswagen" element={<VolkswagenScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
          </Routes>
          {/* <Contact /> */}
      <Footer />
    </Router>
  );
}

export default App;
