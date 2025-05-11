import './header.css'
import image from '../../assets/hero.svg'
const Header = () => {
    return (
        <header className='header'>
           <div className='header-img'>
            <img src={image} alt="" />
           </div>
           <div className='container'>
              <nav className='navbar-nav '>
                <div>
                    <h2>Escape.</h2>
                </div>
                <ul className='ul-collection'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Categories</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>     
                </ul>
              </nav>
           </div>
        </header>
    )
}

export default Header