import React from 'react'
import Cat from './Cat' 

function Cats({cats, deleteCat}) {
    
    const allCats = cats.map((cat) => <Cat key={cat.id} cat={cat} deleteCat={deleteCat}/>)
    return(
        <div>
            <h1>Cats</h1>
            {allCats}
            
        </div>
    )

}

export default Cats