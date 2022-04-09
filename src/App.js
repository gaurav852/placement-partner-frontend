import React from 'react';
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className='main'>
        <h1>React CRUD application</h1>
        <Routes>
          <Route exact path='/create' element={<Create />} />
          <Route exact path='/read' element={<Read />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
