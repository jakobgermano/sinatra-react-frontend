import React, {useState} from 'react'

function CatForm({newCat}) {
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [age, setAge] = useState("")
    const [ownerId, setOwnerId] = useState("")

    function handleSubmit(e, name, gender, age, ownerId) {
        e.preventDefault()
        newCat(name, gender, age, ownerId)
        setName('')
        setGender('')
        setAge('')
        setOwnerId('')
      }

    return(
        <div>
            <h1>add Cat</h1>
            <form onSubmit={(e) => handleSubmit(e, name, gender, age, ownerId)}>
                <label>Cat name: </label>
                <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                <br/>
                <label>Gender: </label>
                <input type="text" name="gender" value={gender} onChange={e => setGender(e.target.value )} />
                <br/>
                <label>age: </label>
                <input type="text" name="age" value={age} onChange={e => setAge(e.target.value)}/>
                <br/>
                <label>Owner ID:</label>
                <input type="text" name="ownerId" value={ownerId} onChange={e=> setOwnerId(e.target.value)} />
                <button type="submit">add Cat</button>
            </form>
        </div>
    )

}

export default CatForm