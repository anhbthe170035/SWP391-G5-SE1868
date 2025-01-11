import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import User from "./router/User";
import Header from "./layout/components/Header";
import Transaction from "./router/Transaction";

function App() {
  return (
    //Router, Routes, Route dùng để chuyển trang
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/user" element={<User />} /> {/* Sử dụng JSX <User/> */}
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/product" element={<Header />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
