import { RouterProvider } from 'react-router-dom'
import { useState } from 'react'
import { RouteAuth } from './routes/authRoutes/RouteAuth'
import { RouteNoAuth } from './routes/noAuthRoutes/RouteNoAuth'

function App() {
  const [account, setAccount] = useState(null)

  const handleAddAccount=(session)=>{
    setAccount(session)
  }

  return (
    <>
      {account ?
        <RouterProvider router={RouteAuth(account)} /> : <RouterProvider router={RouteNoAuth(handleAddAccount)} />}
    </>

  );
}

export default App;
