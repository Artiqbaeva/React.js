import './hero.css'
const Hero = () => {
    return (
        <header className='container'>
            <div className='hero'>
                <h2>Let's do it together.</h2>
                <p>We travel the world in search of stories. Come along for the ride.</p>
                <button>View Latest Posts</button>
            </div>
            <ul className='category-ul'>
                <li><a href="">Nature</a></li>
                <li><a href="">Photography</a></li>
                <li><a href="">Relaxation</a></li>
                <li><a href="">Vacation</a></li>
                <li><a href="">Travel</a></li>
                <li><a href="">Adventure</a></li>
            </ul>
        </header>
    )
}

export default Hero