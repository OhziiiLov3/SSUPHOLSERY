import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container} from 'react-bootstrap'

function App() {
  return (
    <div>
    <Header />
     <main className="py-5">
       <header >
        <Container>
      <h1>Welcome</h1>
      </Container>
      </header>    
      </main>
    <Footer />
    </div>
  );
}

export default App;
