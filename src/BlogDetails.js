import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id} = useParams();
    const history = useHistory();

    const {veri: blog, yukleniyor, hata} = useFetch('http://localhost:8000/yazilar/'+id)

    const blogDelete=()=>{
        fetch('http://localhost:8000/yazilar/'+id,{
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {yukleniyor && <div>Yukleniyor..</div>}
            {hata && <div>{hata}</div>}
            {blog && (
                <article>
                    <h2>{blog.ad}</h2>
                    <p>{blog.yazar}</p>
                    <div>{blog.aciklama}</div>
                    <button onClick={blogDelete}>Sil</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;