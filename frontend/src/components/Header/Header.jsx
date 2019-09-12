import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom'
const Header = props => {
    return (
        <nav>
            <Link to="/">
                <div className="logo">
                    <img src="images/iconoweb.png" alt="logo" />
                    <p>Geekshubs <br />
                        Travels </p>
                </div>
            </Link>
            <ul>
                <Link to="#destinos">
                    <li>Destinos </li>
                </Link>
                <Link to="#quienesSomos">
                    <li>Quién somos </li>
                </Link>
                <Link to="#dondeEstamos">
                    <li>Donde estamos</li>
                </Link>
            </ul>
            <div className="pos-f-t">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <h4 className="text-white">
                            <Link to="#destinos">
                                Destinos
                    </Link></h4>
                    </div>
                    <div className="bg-dark p-4">
                        <h4 className="text-white"> <Link to="#quienesSomos">
                            Quién somos
                    </Link></h4>
                    </div>
                    <div className="bg-dark p-4">
                        <h4 className="text-white"><Link to="#destinos">
                            Donde estamos
                    </Link></h4>
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
                <div className="user">
                    {/* <Link to="/profile" > <img className="profilePicture" src={{user.imagePath}} >
                <img className="edit" src="/images/edit.png" alt="edit" /></Link>

            <Link className="logButton" to="/logout">LOG OUT</Link> */}

                    <Link className="logButton" to="/registro">REGISTRO </Link>
                    <Link className="logButton" to="/login">LOG IN</Link>

                </div>
            </div>
        </nav>
    )
}
export default Header;