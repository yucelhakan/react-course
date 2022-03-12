import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {veri: blogs, yukleniyor, hata} = useFetch('http://localhost:8000/yazilar')

    return ( 
        <div className="home">
            {hata && <div className="error">{hata}</div>}
            {yukleniyor && <div className="loading">Yükleniyor..</div>}
            {blogs && <BlogList bloglar={blogs} baslik="Blog Listesi"/> }           
        </div>
    );

    /*
    Filter kodunu kaybetmemek için
    return ( 
        <div className="home">
            <BlogList bloglar={blogs} baslik="Blog Listesi" silBlog={silBlog}/>            
            <br />
            <BlogList bloglar={blogs.filter((blog)=>blog.yazar=='hakan')} baslik="Hakan Yazarı"  silBlog={silBlog}/>
        </div>
    );

    Projeye başlamadan önce yapılan çalışmalar
    const handleClick=()=>{ //Butonda parantez aç kapa yapmıyoruz
        console.log("SELAM DOSTUM");
    }

    const handleClick2=(isim,e)=>{ //parametre gönderiyorsak butona da dikkat et
        console.log(isim, e.target);
    }

    const [sayac, setDeger] = useState(0);
    const sayacCount=()=>{
        setDeger(3);
    }

    
    return ( 
        <div>
            <h2>Anasayfa</h2>
            <button onClick={handleClick}>Tıkla</button> 
            <button onClick={(e)=>handleClick2("hakan",e)}>Tıkla 2</button>           
            <button onClick={(e)=>{
                console.log(e);
            }}>Tıkla 3</button>
            <hr />
            <p>{sayac}</p>
            <button onClick={sayacCount}>Sayaç</button>
        </div>
    );
    */
}
 
export default Home;