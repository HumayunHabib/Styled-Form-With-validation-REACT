import "./App.css";
import { LandingPage } from "./LandingPage";
import Footer from "./LandingPage/components/footer";
import Header from "./LandingPage/components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
