import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <div className="not-found">
                <h2>Oppss</h2>
                <p>Sayfa Bulunamad─▒</p>
                <Link to='/'>Anasayfa</Link>
            </div>
        </>
    );
}
 
export default NotFound;