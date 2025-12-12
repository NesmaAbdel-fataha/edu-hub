import React from 'react'
import Data from './Card'
function Home() {
  return (
    <section>
<div className="home m-auto my-5 text-center w-100" style={{maxWidth: "26rem"}}>
  <div className="home-content card-body">
    <h6 className="join">Join Us</h6>
    <h1 className="card-subtitle mb-2 text-white">Best Learning Opportunities</h1>
    <p className="card-text my-4 text-white"> We know how large objects will act, but things on a small scale just do not act that way.</p>
  <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
  <a href="#" className="btn get btn-primary btn-sm btn-md-lg w-75 w-md-auto">Get Quote Now</a>
  <a href="#" className="btn ler  btn-sm btn-md-lg w-75 w-md-auto">Learn More</a>
</div>



  </div>
</div>

    </section>
  )
}

export default Home
