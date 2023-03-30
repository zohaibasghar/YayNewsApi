import "./App.css";
import {useState} from 'react'
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress, setProgress] = useState(0)
  const pgSize=15;
  return (
    <BrowserRouter>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<News key='general' setProgress={setProgress} pageSize={pgSize} nextCat={[]} newsCat={'general' }/>} />
        <Route exact path='/business'  element={<News key='business' setProgress={setProgress} pageSize={pgSize} nextCat={[]} newsCat={'business'}/>} />
        <Route exact path='/sports'  element={<News key='sports' setProgress={setProgress} pageSize={pgSize} nextCat={[]} newsCat={'sports'}/>} />
        <Route exact path='/technology'  element={<News key='technology' setProgress={setProgress} pageSize={pgSize} nextCat={[]} newsCat={'technology'}/>} />
        <Route exact path='/science'  element={<News key='science' setProgress={setProgress} pageSize={pgSize} nextCat={[]} newsCat={'science'}/>} />
        <Route exact path='/health'  element={<News key='health' setProgress={setProgress} pageSize={pgSize} nextCat={[]} newsCat={'health'}/>} />
        <Route exact path='/entertainment'  element={<News key='entertainment' setProgress={setProgress} pageSize={pgSize} nextCat={[]} newsCat={'entertainment'}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
