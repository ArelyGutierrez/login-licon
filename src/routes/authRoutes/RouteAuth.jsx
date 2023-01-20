import { createBrowserRouter } from 'react-router-dom';
import { Welcome } from './Welcome'

export const RouteAuth =()=>{

     return createBrowserRouter([ // transformar a funcion
      {
          path: '/',
          element: < Welcome/>,
      }
  ])
  } 
