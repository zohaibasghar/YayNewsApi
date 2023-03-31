import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useSelector } from "react-redux";

function App() {
  const {category,loading} = useSelector((state) => state);
  const [progress, setProgress] = useState(loading.progress);
  
  return (
    <BrowserRouter>
      <LoadingBar
        color="#ffc107"
        progress={progress || loading.progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Routes>
        <Route
          exact
          path={category.category === "general" ? "/" : category.category}
          element={<News key={category}  />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
