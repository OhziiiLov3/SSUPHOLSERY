import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <div>
    <Header />
     <main className="py-5">
       <header >
        <Container>
      <h1>Welcome to SSUpholstery</h1>
          <HomeScreen/>
      </Container>
      </header>    
      </main>
    <Footer />
    </div>
  );
}

export default App;
