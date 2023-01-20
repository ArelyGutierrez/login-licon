import { createBrowserRouter } from 'react-router-dom';
import { Login } from './Login';

export const RouteNoAuth = (handleAddAccount)=> createBrowserRouter([
    {
      path: '/',
      element: < Login />,
    },
  ]);
 