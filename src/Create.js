import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [baslik, setBaslik] = useState('');
    const [aciklama, setAciklama] = useState('');
    const [yazar, setYazar] = useState('hakan');

    const [yukleniyor, setYukleniyor] = useState(false);

    const history = useHistory();

    const formSubmit = (e) =>{
        e.preventDefault();
        setYukleniyor(true);
        const yazi = {ad: baslik, aciklama, yazar}
        
        fetch('http://localhost:8000/yazilar/',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(yazi)
        }).then(()=>{
            console.log("Yazı Eklendi");
            setYukleniyor(false);

            //history.go(-1)
            history.push('/');
        })
        
    }

    return (
        <div className="create">
            <h2 style={{color:'#ff793b'}}>Yeni Yazı Ekle</h2>

            <form onSubmit={formSubmit}>
                <input type="text" value={baslik} onChange={(e)=>setBaslik(e.target.value)} placeholder="Başlık" required/>
                <textarea value={aciklama} onChange={(e)=>setAciklama(e.target.value)} placeholder="Açıklama" required></textarea>
                <select value={yazar} onChange={(e)=>setYazar(e.target.value)} required>
                    <option value="hakan">Hakan</option>
                    <option value="hako">Hako</option>
                    <option value="yucel">Yücel</option>
                </select>

                {!yukleniyor && <button>Kaydet</button>}
                {yukleniyor && <button disabled>Yükleniyor</button>}
            </form>
        </div>
    );
}
 
export default Create;