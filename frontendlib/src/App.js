
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Addbook from './com[ponents/Addbook';
import Navbar from './com[ponents/Navbar';
import Viewbooks from './com[ponents/Viewbooks';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Viewbooks/>}/>
        <Route path='/add'
         element={<Addbook data={{BookName:"",author:"",language:"", genre:"",bookNum:""}} method="post"/>}/>
      </Routes>
    </div>
  );
}

export default App;
