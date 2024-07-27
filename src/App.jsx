
import {BrowserRouter,  Routes, Route } from "react-router-dom";
import Error from './conponent/Error.jsx'
import './scss/app.scss';
import Home from "./conponent/Home";
import CartItem from "./conponent/CartItem";
import { store } from "./redux/store.";
import { Provider } from 'react-redux'

function App() {
  return (
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<CartItem />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
  </Provider>
  );
}

export default App;
