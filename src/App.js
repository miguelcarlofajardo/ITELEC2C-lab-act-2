import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Navbar from "./Navbar";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
import Menu from "./Menu";
import Signup from "./Signup";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Navbar></Navbar>
      <Signup></Signup>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

export default App;
