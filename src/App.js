import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import News from './components/News';
import Newsitem from './components/Newsitem';
import Checking from './components/checking';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    
    <BrowserRouter>

        <Routes>

          {/* <Route path='/newzapp' element={<News pageSize={5}/>} ></Route> */}
          <Route exact path="/newzapp" element={<Checking/>}></Route>

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
