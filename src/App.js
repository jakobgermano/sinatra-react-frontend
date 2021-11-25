import Cats from './Cats'
import Owners from './Owners'
import OwnerForm from './OwnerForm'
import CatForm from './CatForm'
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [cats, setCats] = useState([])
  const [owners, setOwners] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/owners")
  .then((r) => r.json())
  .then((data) => setOwners(data));
  }, [])

  function newOwner(name){
    const owner = {name: name}
    fetch(`http://localhost:9292/owners`, {
            method: "POST",
           headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(owner)
          })
       .then((res) => res.json())
       .then((newOwner => setOwners(owners.concat(newOwner)))
       )}

       function deleteOwner(deleteOwner) {
        const updatedOwner = owners.filter((owner) => owner.id !== deleteOwner.id)
        setOwners(updatedOwner)
        }

  function newCat(name, gender, age, ownerId){
    const cat = {name: name, gender: gender, age: age, owner_id: ownerId}
    fetch(`http://localhost:9292/cats`, {
            method: "POST",
           headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cat)
          })
       .then((res) => res.json())
       .then((newCat => setCats(cats.concat(newCat)))
       )}
       

  useEffect(() => {
    fetch("http://localhost:9292/cats")
  .then((r) => r.json())
  .then((data) => setCats(data));
  }, [])

   

  function deleteCat(deleteCat) {
    const updatedCat = cats.filter((cat) => cat.id !== deleteCat.id)
    setCats(updatedCat)
    }

  return (
    <div className="App">
      <h1>Cats and Owners</h1>
      <Owners owners={owners}
      deleteOwner={deleteOwner}/>
      <OwnerForm newOwner={newOwner}/>
      <Cats cats={cats}
      deleteCat={deleteCat}/>
      <CatForm newCat={newCat}/>
    </div>
  );
}

export default App;



