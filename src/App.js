import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import User from "./router/User";
import Header from "./layout/components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/user" element={<User />}/> {/* Sử dụng JSX */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
