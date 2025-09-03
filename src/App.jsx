import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import StudentTable from './StudentTable';
import CreateStudent from './CreateStudent';
import UpdateStudent from './UpdateStudent';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<StudentTable/>}></Route>
    <Route path='/create' element={<CreateStudent/>}></Route>
    <Route path='/update/:id' element={<UpdateStudent/>}></Route>

    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
