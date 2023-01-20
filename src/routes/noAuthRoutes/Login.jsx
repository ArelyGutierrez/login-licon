import axios from 'axios';
import { useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const Login = ( {handleAddAccount} ) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmitClick = () => {

    if (email === '' || password === '') {
      alert('llena todos los campos requeridos');
    } else {
      axios.get(`https://6387d97cd94a7e50408eaddc.mockapi.io/auth?email=${email}`)
      .then(users => {
        console.log(users);
        handleAddAccount(users.data[0])
        const findedUser = users.data.find((user) => user.email === email && user.password === password)

        if (findedUser) {
          // se hizo el login exitosamente
          // redirigir a otra pagina, setear un estado compartido
          console.log(findedUser)
        } else {
          // no hay un usuario con los datos ingresados
          // mostrar un error 
          // etc
          console.log('no existe ')
        }
         }
      )
        .catch(error => {
          console.log(error)
        })

    }
  }

  return (
    <>
      <Header />
      <main class="mainLogin">
        <div class="container-lg">
          <h1 class="login">Iniciar sesión </h1>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email:</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' value={email} onChange={(e) => setEmail(e.target.value)} />

            <label for="exampleInputPassword1" class="form-label">Password:</label>
            <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="button" class="ingresar" onClick={handleSubmitClick}>Ingresar</button>

        </div>
      </main>
      <Footer />
    </>
  );
}