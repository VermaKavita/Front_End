import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='container z-index shadow position-sticky'>
        <div className='row'>
            <div className='col-12-lg'>
    <nav className="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4" style={{backgroundColor:'#e3f2fd',borderRadius: '15px'}}>
  <div className="container-fluid">
    <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3" href="#">Student Portal</a>
    <button className="navbar-toggler" type="button" >
      
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
     
      </div>
    </div>
  </div>
</nav>
</div>
</div>
        </div>
    </>
  )
}

export default Navbar