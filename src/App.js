import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  const [categoryState, setCategory] = useState("sports");
  async function categorySelector(category) {
    if (category === "business") {
      setCategory("business");
    } else if (category === "sports") {
      setCategory("sports");
    } else if (category === "technology") {
      setCategory("technology");
    } else if (category === "everything") {
      setCategory("everything");
    }
  }
  return (
    <BrowserRouter>
      <Navbar categoryMenu={categorySelector} />
      <Routes>
        <Route
          path=""
          element={<News pageSize={20} newsCat={categoryState} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
