import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Form from './pages/Form';
import Question from './pages/Question';

function App() {


  return (
    <div className=''>
      <h1 className="text-3xl text-center font-bold font-mono py-2 px-3 shadow-lg w-full">Dynamic Form Builder App</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/question' element={<Question/>}/>
      </Routes>
    </div>
  );
}

export default App;
