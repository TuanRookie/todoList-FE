import AddBook from "./components/AddBook";
import ListBook from "./components/ListBook";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from "./components/Register";
import Login from "./components/Login";
import { Route, Routes } from 'react-router-dom'
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<><ListBook /><AddBook /></>} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
