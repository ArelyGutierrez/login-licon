import liconIcon from '../images/liconIcon.png'
import './Header.css';

export const Header = () => {
    return (
        <>
            <header class="headerLogin">
                <img id='liconIcon' src={liconIcon} alt={liconIcon} />

                <nav className="navbar navbar-expand-lg" id="nav">
                    <div className="container-fluid">

                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">CONÓCENOS
                                    {/* <Link to="/users" className="ref">User</Link> */}
                                </li>
                                <li className="nav-item">PRODUCTOS
                                    {/* <Link to="/administrator" className="ref">Menu</Link> */}
                                </li>
                                <li className="nav-item">CONTACTO
                                    {/* <Link to="/administrator" className="ref">Menu</Link> */}
                                </li>
                                <li className="nav-item">INICIAR SESIÓN
                                    {/* <Link to="/administrator" className="ref">Menu</Link> */}
                                </li>
                            </ul>


                            <div >
                                {/* <Time className='time' /> */}
                            </div>
                        </div>
                    </div>
                </nav>

            </header>
        </>
    )
}