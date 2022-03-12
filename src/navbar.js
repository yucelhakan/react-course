//import './navbar.css';
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>AOS Blog</h1>
            <div className="links">
                <Link to='/'>Ana Sayfa</Link>
                <Link to='/Create' style={{
                    backgroundColor:'#ff793f', color:'#fff', borderRadius:'8px'
                }}>Yeni Yazı Ekle</Link>
            </div>
        </nav>
    );
}

export default Navbar;