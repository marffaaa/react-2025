import { useEffect } from 'react';
import './App.css'
import { getAllUsers, saveUser } from './services/user.service';

function App() {

  useEffect(() => {
    getAllUsers().then(value => console.log(value))

    saveUser({id:1, name: "John", email: "john@gmail.com"}).then(value => console.log(value));
  }, []);
  return (
    <>
    </>
  )
}

export default App
