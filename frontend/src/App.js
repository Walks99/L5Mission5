import "./App.css";
import {Routes,Route} from 'react-router-dom';
import DataEntry from "./data-entry/DataEntry";
import Chosenpropertylisting from "./pages/ben-walker/ChosenPropertyListing";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/dataentry' element={<DataEntry />}></Route>
      <Route path='/chosenpropertylisting' element={<Chosenpropertylisting />}></Route>
    </Routes>
  )
}

export default App;
