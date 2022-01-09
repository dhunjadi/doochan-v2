import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/reducers/store";
import "./scss/styles.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Art from "./pages/Art";
import Clothes from "./pages/Clothes";
import Furniture from "./pages/Furniture";
import Jewellery from "./pages/Jewellery";
import Toys from "./pages/Toys";
import Page404 from "./pages/Page404";
import ItemDetails from "./pages/ItemDetails";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/art" element={<Art />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/toys" element={<Toys />} />
          <Route path="/item/:id" element={<ItemDetails />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
