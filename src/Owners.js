import React from 'react'
import Owner from './Owner'

function Owners({owners, deleteOwner}) {
    
    const allOwners = owners.map((owner) => <Owner key={owner.id} owner={owner} deleteOwner={deleteOwner}/>)
    return(
        <div>
            <h1>Owners</h1>
            {allOwners}
            
        </div>
    )

}

export default Owners