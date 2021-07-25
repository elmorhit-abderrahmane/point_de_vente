class Menu extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (     
        <nav className="main-header navbar navbar-expand navbar-light navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav col-md-9" >
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="ouvriers.html" className="nav-link">Ouvriers</a>
            </li>
          </ul>
          {/* Right navbar links */}
          <div className="user-panel mt-3 pb-1 mb-1 d-flex col-md-3 text-right">
          <div className="info">
                  <a href="#" className="d-block">&#124; &nbsp;&nbsp;&nbsp;&nbsp;Akhrif Jaafar</a>
                </div>
                <div className="image">
                  <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                </div>

              </div>
              
        </nav>



        )
    }
}