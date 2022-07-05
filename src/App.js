import "./App.css";
import Navbar from "./components/navbar";
// import { Switch, Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Switch,
} from "react-router-dom";
import Home from "./pages/index";
import Services from "./pages/services";
import Booking from "./pages/booking";

// import Background from "./components/Home/Background";
// import Slide from "./components/Home/Slide";
// import AboutUs from "./components/Home/AboutUs";

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <Background />
    //   <Slide />
    //   <AboutUs />
    // </div>
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
