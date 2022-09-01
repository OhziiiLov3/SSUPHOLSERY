import {Container} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LandingCarousel from "./components/LandingCarousel";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import About from "./screens/About";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <header>
          <Container>
            <LandingCarousel />
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />
              <Route path="/about" element={<About />} exact />
              <Route path="/service/:id" element={<ProductScreen />} />
            </Routes>
          </Container>
        </header>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
