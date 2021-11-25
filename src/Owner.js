import React from 'react'

function Owner({owner, deleteOwner}) {

    function deleteClick() {
        fetch(`http://localhost:9292/owners/${owner.id}`, {
            method: "DELETE",
          })
           .then((res) => res.json())
          .then(() => {deleteOwner(owner)
          })
      }
    
    return(
        <div>
            <h3>{owner.name}</h3>
            <button className="delete-button" onClick={deleteClick}>Delete</button>
        </div>
    )

}

export default Owner