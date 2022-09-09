import React, { createContext, Suspense, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './components/Custom/Loader';
import DefaultLayout from './layouts/DefaultLayout';
import LoginLayout from './layouts/LoginLayout';
import ProfileLayout from './layouts/ProfileLayout';
import { store } from './redux/store';
import { DefaultRoutes, LoginRoutes, ProfileRoutes } from './routes/Routes';

export interface ILoader {
  load?: boolean,
  setLoad?:any
}

export const LoaderIs = createContext<ILoader>({});

const App = () => {
  const [load, setLoad] = useState<boolean>(false);

  return (<Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <LoaderIs.Provider value={{load: load, setLoad: setLoad}}>

          {load && <Loader />}
          <Routes>
            <Route path='/auth' element={<LoginLayout />}>
              {LoginRoutes.map((element, index) => {
                return (<Route key={"pageLog" + index.toString()} path={element.path}
                  element={<element.element />} />);
              })}
            </Route>
            <Route path='/profile' element={<ProfileLayout />}>
              {ProfileRoutes.map((element, index) => {

                return <Route key={"pageProfile" + index.toString()} path={element.path}
                  element={<element.element />} />
              })}
            </Route>
            <Route path='/' element={<DefaultLayout />}>
              {DefaultRoutes.map((element, index) => {
                return (<Route key={"page" + index.toString()}
                  path={element.path} element={<element.element />} />)
              })}
            </Route>
          </Routes>

        </LoaderIs.Provider>
      </BrowserRouter>

    </Suspense>

  </Provider>);


}

export default App;
