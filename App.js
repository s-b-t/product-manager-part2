import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Main from './views/Main'
import Detail from './views/Detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path='/api/products/' />
        <Route element={<Detail />} path='/api/products/:id' />
      </Routes>
    </div>
  );
}

export default App;
