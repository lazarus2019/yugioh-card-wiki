import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import "./scss/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "pages/Details/DetailPage";
import HomePage from "pages/HomePage/HomePage";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
