
function Navbar(){
    return(
        <>
         <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src="./assests/img/NORDIC ROSE.jpg" alt="no photo" style={{ width: "250px" }} /></a>
              
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active a-nav" aria-current="page" href="/">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link a-nav" href="/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link a-nav" href="/">Links</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link a-nav" href="/"  aria-disabled="true">Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

        </>
    )
}

export default Navbar;