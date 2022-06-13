import React, { Suspense } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import { DefaultRoutes } from './routes/Routes';

const  App= () =>  {
  return (<Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          {DefaultRoutes.map((element, index) => {
              return (<Route key={"page" + index.toString()} 
              path={element.path} element={<element.element/>}/>)
          })}
        </Route>
      </Routes>

    </BrowserRouter>

  </Suspense>);
    
  
}

export default App;
