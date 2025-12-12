import React from 'react'

function Subheader({title,description}){
  return (
    <div>
          <div className="container">
          <h6 class="card-title pt-5 text-primary">Practice Advice</h6>
  
  
    <h2 class="card-title">{title}</h2>
    <p class="card-text">{description}</p>
 
      </div>
    </div>
  )
}

export default Subheader
