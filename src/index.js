import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import routerName from './utils/Router';
import store from './store';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={routerName}/>
      </Provider>
  </React.StrictMode>
);
