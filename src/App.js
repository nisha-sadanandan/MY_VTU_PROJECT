import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screens/HomeScreen.js";




function App() {
  return (
    <>
    <Header/>
    <Container>
      <main>
        <HomeScreen/>
      </main>
    </Container>
    <Footer/>
    </>
  );
}

export default App;
