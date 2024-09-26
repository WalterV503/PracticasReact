import { NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to='/' className="nav-link active" aria-current="page" href="#">Home</NavLink>
                            <NavLink to='/ConsultandoAPI' className="nav-link" href="#">ConsultandoAPI</NavLink>
                            <NavLink className="nav-link" href="#">Pricing</NavLink>
                            <NavLink className="nav-link disabled" aria-disabled="true">Disabled</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
