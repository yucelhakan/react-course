import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id} = useParams();
    const {veri: blog, yukleniyor, hata} = useFetch('http://localhost:8000/yazilar/'+id)

    return (
        <div className="blog-details">
            {yukleniyor && <div>Yukleniyor..</div>}
            {hata && <div>{hata}</div>}
            {blog && (
                <article>
                    <h2>{blog.ad}</h2>
                    <p>{blog.yazar}</p>
                    <div>{blog.aciklama}</div>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;