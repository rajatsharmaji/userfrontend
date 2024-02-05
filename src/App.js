import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import PageList from "./components/PageList";
import Page from "./components/Page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/page" element={<Page />}></Route>
          <Route path="pagelist" element={<PageList />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
