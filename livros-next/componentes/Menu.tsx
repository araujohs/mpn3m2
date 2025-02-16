import React from 'react';
import Link from 'next/link';

export const Menu: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" href="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/LivroLista">
                                Catálogo
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/LivroDados">
                                Novo
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
