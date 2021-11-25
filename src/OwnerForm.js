import React, {useState} from 'react'

function OwnerForm({newOwner}) {
    const [name, setName] = useState("")
    

    function handleSubmit(e, name) {
        e.preventDefault()
        newOwner(name)
        setName('')
      }

    return(
        <div>
            <h1>Add Owner</h1>
            <form onSubmit={(e) => handleSubmit(e, name)}>
                <label>Owner name: </label>
                <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                <button type="submit">add Owner</button>
            </form>
        </div>
    )

}

export default OwnerForm