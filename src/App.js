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
import Confirmation from "./pages/confirmation";

function App(props) {
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
        <Route path="/services/:type" element={<Services />} />
        <Route path="/booking/:service_type" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  );
}

export default App;
