import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Notfound } from "./pages/Notfound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="*" element={<Notfound />}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
