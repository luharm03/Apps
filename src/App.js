import Header from "./components/Header";
import Container from "./components/Container";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./css/styles.scss";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="productCart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}
