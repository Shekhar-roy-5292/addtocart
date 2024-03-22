import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Store from "./page/Store";
import { Provider } from "react-redux";
import Cart from "./ReduxStore/Cart";
import ProductCart from "./page/ProductCart";
function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={Cart}>
          <Nav />
          <Routes>
            <Route path="/" element="" />
            <Route path="/Store" element={<Store />} />
            <Route path="/Cart" element={<ProductCart />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
