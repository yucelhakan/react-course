import './navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>AOS Blog</h1>
            <div className="links">
                <a href="/">Home Page</a>
                <a href="/create">Yeni Yazı</a>
            </div>
        </nav>
    );
}

export default Navbar;