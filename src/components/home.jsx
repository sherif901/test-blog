
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Home(){

    const[products , setProducts] = useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then(res=>{
            let data = res.data;
            setProducts(data);
        })
    },[])




    return(
        <>
        
      
      <section className="container  ">

<div className="first-section mt-5">
  <img className="img-fluid mx-auto d-block"  style={{ width:"80%" }}  src="assests/img/e7e1275cacd73edc67b4afe128d222d5.png" alt="no photo"/>
  <h1>A few words about this blog platform, Ghost, and how this site was made</h1>
  <p className="lead blockquote-foote">Why Ghost (& Figma) instead of Medium, WordPress or other options?</p>
  <hr/>
</div>

<div className="article">
  <h2>All articles</h2>
  </div>


  
  <div className=" container "  >
     
    
    <div className="row" style={{width: "70%" ,margin: "auto"}} >
        {
            products.map(p=>(
    <div className="col-md-6  "  >
      <Link to={`/page/${p.id}`}  key={p.id}>        
      <div className="card border-0  " >
        <img src={p.image} className="card-img-top  " alt="..."/>
        <div className="card-body">
          <p className="card-text">{p.title}</p>
        </div>
      </div>
     </Link>
    </div>

            ))
  }
      
    
  
    
    
  
</div>
</div>
</section>

        </>
    )
}

export default Home;