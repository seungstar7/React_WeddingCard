import React from 'react';
import Main from '@/pages/main/Main'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


const App = () => {
  return (
      <div className="App">

          <p>hello world</p>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Main/>}></Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
};

export default App;