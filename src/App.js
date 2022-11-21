import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";


function App() {
  return (
    <>
    <Navbar link2="About"/>
    <News pageSize={20}/>
    </>
  );
}

export default App;
