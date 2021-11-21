import Cats from './Cats'
import CatForm from './CatForm'
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [cats, setCats] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/cats")
  .then((r) => r.json())
  .then((data) => setCats(data));
  }, [])


  return (
    <div className="App">
      <h1>Cats and Owners</h1>
      <Cats cats={cats}/>
      <CatForm/>
    </div>
  );
}

export default App;

//Cats index component for all the cats
//new cat form component
