
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/menu';
import Login from './pages/login';
import Register from './pages/register';
import Reserve from './pages/reserve';
import Actions from './pages/actions';
import Edit from './pages/Edit';
import EditDriver from './pages/editDriver';
import ActionDriver from './pages/actionDriver';
import Addcars from './pages/Addcars';
import Updatecars from './pages/Updatecars';
import RegData from './pages/regData';

function App() {
  return (
    <div>
    <BrowserRouter> 
    <Menu/>
    {/* <ActionDriver/> */}

  {/* <Register/> */}


  
   
    

              <Routes>

                {/* <Route path='/' element={<Actions/>}/>
                <Route path='/addcars' element={<Addcars/>}/>
                <Route path='/edit' element={<Edit/>}/>
                <Route path='/action' element={<Actions/>}/>
                <Route path='/updatecars/:plateNo' element={<Updatecars/>}/>
                <Route path='/actionsCar' element={<Actions/>}/>  */}


              {/* <Route path='/' element={<ActionDriver/>}/> */}
              
              <Route exact path='/' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/actiondriver' element={<ActionDriver/>}/>
              <Route path='/editdriver/:driverID' element={<EditDriver/>}/>

              <Route path='/addcars' element={<Addcars/>}/>
              <Route path='/edit' element={<Edit/>}/>
              <Route path='/action' element={<Actions/>}/>
              <Route path='/updatecars/:plateNo' element={<Updatecars/>}/>
              <Route path='/actionsCar' element={<Actions/>}/> 
              <Route path='/reg' element={<RegData/>}/>


                {/* <Route exact path='/' element={<Login/>}/>
                <Route path='/login' element={<Login/>}/>
                
                <Route path='/register' element={<Register/>}/>

                <Route path='/reserve' element={<Reserve/>}/>

                <Route path='/edit' element={<Edit/>}/>

                <Route path='/action' element={<Actions/>}/>

                <Route path='/addcars' element={<Addcars/>}/>
                <Route path='/updatecars/:plateNo' element={<Updatecars/>}/>
                <Route path='/actionsCar' element={<Actions/>}/>  */}

            </Routes>  
      

    </BrowserRouter>
    </div>
  );
}

export default App;
