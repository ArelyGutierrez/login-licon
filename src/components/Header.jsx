import liconIconRemovebg from '../images/liconIconRemovebg.png'
import searchIcon from '../images/searchIcon.png'
import './Header.css';

export const Header = () => {
    return (
        <>
            <header class="headerLogin">
                <nav id='navbar'>
                    <div className="container-fluid">
                        <img id='liconIcon' src={liconIconRemovebg} alt={liconIconRemovebg} />
                    </div>

                    <div className="topnav">
                        <a href="#news">News</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                    </div>

                    <form id='searchForm'>
                        <input id='searchInput' placeholder='buscar' />
                        <button class="searchButton" type="submit"><img id='searchIcon' src={searchIcon} alt={searchIcon} /></button>
                    </form>


                </nav>

            </header>
        </>
    )
}