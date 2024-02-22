"use client";
import React, { useEffect, useState } from 'react';
import './news.css';



const News = () => {
    const [mynews, setMynews] = useState([]);

    const fetchData = async () => {
        let res = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=4876588e809a4636a26daa71a64035be");
        let data = await res.json();
        setMynews(data.articles);
    }
    
    


    useEffect(() => {
        fetchData();
    }, []);

    const [expandedNews, setExpandedNews] = useState(null);

    const handleReadMore = (index) => {
        setExpandedNews(index);
    }

    const handleReadLess = () => {
        setExpandedNews(null);
    }
   
    return (
        <>
       
        <div className="container1" style={{ backgroundColor: "white" }}>
            <div className="justify-content-center" style={{ backgroundColor: "white", marginRight: "-200px", marginTop: "80px" }}>
                {mynews.map((article, index) => (
                    <div className="article" key={index} style={{ width: "300px", height: "auto", marginBottom: "20px" }}>
                     {article.urlToImage !==null ?( <img src={article.urlToImage} alt="" style={{ width: "300px", height: "200px" }}  />):(
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-nqfENm5nYTSiGn86Bkd8_lybyAqF9aorw&usqp=CAU"} alt='' />
                     )}
                        <div className="article-content">
                        <a href={article.url} target="_blank" rel="noopener noreferrer"><h2>{article.title}</h2></a> 
                        
                           <div className="button-card"><a href={article.url} className="read-more" target="_blank" rel="noopener noreferrer">Read-More...</a></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        </>
    );
}

export default News;
