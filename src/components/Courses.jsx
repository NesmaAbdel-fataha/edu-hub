import React from 'react'




function Courses({img,subTitle,title,desc,sale,time}) {
  return (
    <div className='courses'>


<div class="card">
  <div className="container">

   
<div class="row  g-4 py-5">
  <div class="col">
     <div className="card h-100">
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{subTitle}</h5>
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{desc}</p>
        <h6>{sale}</h6>
      </div>
      <div className="card-footer">
        <i className="bi bi-clock"></i>
        <small className="text-body-secondary ms-1">{time}</small>
      </div>
    </div>
  </div>

</div>

{/* ............. */}
  </div>
  


</div>

    </div>
  )
}

export default Courses
