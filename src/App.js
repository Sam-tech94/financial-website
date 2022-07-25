import About from "./components/about/About";
import Demo from "./components/demo/Demo";
import Footer from "./components/footer/Footer";
import Home from "./components/hero/Home";
import NavBar from "./components/navbar/Navbar";
import Testimonials from "./components/testimonials/Testimonials";


function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Testimonials />
      <Demo />
      <Footer />
    </>
  );
}

export default App;
