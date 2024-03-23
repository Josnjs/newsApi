import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import News from "./pages/News";
import Notice from "./pages/Notice";

import Error from "./pages/Error";
import Footer from "./components/Footer";

export default function NewsRoutes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/notice/:id" element={<Notice />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
