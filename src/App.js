import React from 'react';
import GameMain from '@/pages/game/GameMain'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


const App = () => {
  return (
      <div className="App">

          <p>hello world</p>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<GameMain/>}></Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
};

export default App;