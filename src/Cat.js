function Cat({cat, deleteCat}) {

    function deleteClick() {
        fetch(`http://localhost:9292/cats/${cat.id}`, {
            method: "DELETE",
          })
           .then((res) => res.json())
          .then(() => {deleteCat(cat)
          })
      }
    
    return(
        <div>
            <h3>{cat.name}</h3>
            <h4>gender: {cat.gender}</h4>
            <h4>age: {cat.age}</h4>
            <button className="delete-button" onClick={deleteClick}>Delete</button>
        </div>
    )

}

export default Cat