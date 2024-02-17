"use client";
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const News = () => {
    const [mynews, setMynews] = useState([]);

    const[data,setData] = useState({});
    const fetchData=async() =>{
        let res = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=4876588e809a4636a26daa71a64035be");
        let data = await res.json();
     setMynews(data.articles)
   // console.log();
   
    }


   
    useEffect(()=>{
        fetchData();
    },[])


   console.log(mynews);
  
//  useEffect(() =>
//  {

//     mynews.map((item) =>
    
    
//     console.log(item)
//     //setData(item))

//  )},[])


    
//   return (
//     <>
//     <div className="card" style={{width:"18rem "}}>
//   <img src="..." className="card-img-top" alt="..." />
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </>
//   )
// }


return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {mynews.map((article, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100" style={{width: "100%"}}>
              <img src={article.urlToImage} className="card-img-top" alt={article.title} style={{height: "200px", objectFit: "cover"}} />
              <div className="card-body">
                <h5 className="card-title" style={{fontWeight:"bold"}}>{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <p className="card-text"><strong>Author:</strong> {article.author}</p>
                <p className="card-text"><strong>Content:</strong> {article.content}</p>
                <a href={article.url} className="btn btn-success">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  



      }
export default News