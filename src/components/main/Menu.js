import React, { Component } from 'react';
import { Link }             from 'react-router-dom';

import mainLogo from'../../i-logo.jpg';

class Menu extends Component {
    render() {
        return (
            <div className="row top-line pos-f-t">
                <div className="col-2 top-line__i-logo">
                    <Link to={`/`}><img src={mainLogo} alt=""/></Link>
                </div>
                <div className="col-7 top-line__t-logo text-muted">
                    Panem et Circenses
                </div>
                <div className="col-3 top-line__menu">
                    <nav className="navbar navbar-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                </div>

                <div className="col-12 collapse" id="navbarToggleExternalContent">
                    <div className="navbar-light p-4">
                        <ul>
                            <Link to={`/`}>Home / other city</Link>
                            <Link to={`/`}>Show 10 Best Placesin Kyiv</Link>
                            <Link to={`/`}>Add new place in Kyiv</Link>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}

export default Menu;