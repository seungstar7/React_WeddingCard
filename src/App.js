import React from 'react';
import Main from '@/pages/main/Main'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


const App = () => {
  return (
      <div className="app">
          <Main/>
          {/*todo : router 이슈 해결 후 url 주소 매핑 예정*/}
          {/*<BrowserRouter>*/}
          {/*    <Routes>*/}
          {/*        <Route path="/" element={<Main/>}></Route>*/}
          {/*    </Routes>*/}
          {/*</BrowserRouter>*/}
      </div>
  );
};

export default App;