import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <div className="not-found">
                <h2>Oppss</h2>
                <p>Sayfa Bulunamadı</p>
                <Link to='/'>Anasayfa</Link>
            </div>
        </>
    );
}
 
export default NotFound;