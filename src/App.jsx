import { About, Footer, Header, Skills, Works } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
        <div className="app">
          <Navbar />
          <Header />
          <Skills />
          <Works />
          <About />
          <Footer />
           
        </div>
  );
};
export default App;
