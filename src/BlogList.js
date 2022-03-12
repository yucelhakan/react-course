import React from "react"

export default function BlogList({bloglar, baslik}){

    return (
        <div className="blog-list">
            <h2 style={{color: '#ff793f'}}>{baslik}</h2>
            {
                bloglar.map((blog)=>( //döngüde key bilgisi önemli yoksa console de hata veriyor
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.ad}</h2>
                        <p> Yazar: {blog.yazar}</p>
                    </div>
                ))
            }
        </div>
    )
}