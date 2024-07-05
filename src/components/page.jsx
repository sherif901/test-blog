
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Page(){

    const[product , setProduct] = useState(null);
    const {productId} = useParams();
    
        useEffect(()=>{
            
            axios.get(`https://fakestoreapi.com/products/${productId}`).then(res=>{
                let data = res.data;
                setProduct(data);
    
             });
        },[ productId ])

        if (!product) {
            return "loading ..."
        }
            





    return(
        <>
        
    <section className="container  ">

<div className="first-section">
    <h1>A few words about this blog platform, Ghost, and how this site was made</h1>
    <p className="lead blockquote-foote">Why Ghost (& Figma) instead of Medium, WordPress or other options?</p>
    
</div>
</section>
    <div>
        <img className="img-fluid mx-auto d-block" style={{width:"100%"}}   src="/assests/img/e7e1275cacd73edc67b4afe128d222d5.png" alt="no photo"/>
        <hr/>
    </div> 

<section className="container second-section">

<div className="content">
<img src="/assests/img/875cbd62dfb4fbcb27f4d719d4c90d9d.png" alt="no photo"/>
<div className="p-secondsection">
    <p>Mika MAtikainen</p>
    <p>Apr 15, 2020 · 4 min read</p>
</div>
</div>


<div>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
  </svg>
</div>



</section>

<section className="container">
<div className="p-1" >
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. </p>

 <p> className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus </p>

  <h2>Next on the pipeline</h2>

  <p>Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>

  <p>  Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. </p>
</div>

<div className="img-head ">
  <img  className="img-fluid mx-auto d-block"  src={product.image} alt="no photo"/>
  <p> Title : {product.title}</p>
</div>

<div className="p-a-img">
  <p>Category : {product.category} </p>

    <p className="p-two"> Description : {product.description}</p>
  </div>
  
  <div className="p-three">
    <p>A list looks like this:</p>
  </div>

  <div className="p-four">
    <ul>
      <li>First item in the list</li>
        <li>Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet</li>
        <li>Third item in the list</li>
      </ul>
      <p>className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. </p>
      
    </div>

    <div className="p-five" >
      <p>Thanks for reading,</p>
      <p>Mika</p>
    </div>

    <div className="logo">
      <p>        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
      </svg>Share on Facebook</p>
      <p>        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
      </svg>Share on Twitter</p>
    </div>

    <div className="link">
      <p> tages:<a href="/">product design</a> ,
        <a href="/">culture</a></p>
    </div>

    <hr style={{width: "50%" , margin: "auto;"}}/>

    <div className="info">
      <div>
      <img src="/assests/img/875cbd62dfb4fbcb27f4d719d4c90d9d.png" alt="no photo"/>
      </div>
      <div className="p-info">
      <p>Mika Matikainen is a Design Founder & Advisor, Berlin School of Creative Leadership Executive MBA participant, Zippie advisor, Wolt co-founder, and Nordic Rose stakeholder.  </p>
    </div>
  </div>

  <hr style={{borderWidth: "0"}}/>


  <div className="h2">
    <h2>What to read next</h2>
  </div>



  <div className=" container d-flex justify-content-center align-item-center" style={{width: "80%", paddingTop: "5%"}}  > 
    <div className="row   " >
      <div className="col-md-4 "  >
        <div className="card border-0" >
          <img src="/assests/img/b41fc4f07883f092abcb8b50cc385300.png" className="card-img-top  " alt="..."/>
          <div className="card-body">
            <p className="card-text">Here are some things you should know regarding how we work </p>
          </div>
        </div>
      </div>
        
        
        <div className="col-md-4">
        <div className="card border-0"  >
          <img src="/assests/img/42dabdd296b59f06235cff2ebd5a665f.png" className="card-img-top " alt="..."/>
          <div className="card-body">
            <p className="card-text">Granny gives everyone the finger, and other tips from OFFF Barcelona</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card border-0" >
          <img src="/assests/img/94f3a12a95859303cc9b14a152ae97d3.png" className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text">Hello world, or, in other words, why this blog exists</p>
          </div>
        </div>
      </div>


      <div className="col-md-4">
        <div className="card border-0" >
          <img src="/assests/img/1c41c38a016505004b25ed9873519a33.jpg" className="card-img-top " alt="..."/>
          <div className="card-body">
            <p className="card-text">Here are some things you should know regarding how we work </p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card border-0" >
          <img src="/assests/img/f7b19a34b9740986c07b3c4c157cc2b3.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text">Connecting artificial intelligence with digital product design</p>
          </div>
        </div>
      </div>

        <div className="col-md-4">
        <div className="card border-0" >
          <img src="/assests/img/373bb8f3005fee14fb8946d66839462a.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text">Its all about finding the perfect balance</p>
          </div>
        </div>
      </div>

      </div>
  </div>


  <div className="container d-flex justify-content-center align-item-center"  style={{width: "70%", paddingTop: "5%"}}>
    <div className="card" style={{width: "30rem", textAlign: "center"}}>
      <div className="card-body  " style={{borderStyle: "solid"}}>
        <h5 className="card-title">Sign up for the newsletter</h5>
        <p className="card-text">If you want relevant updates occasionally, sign up for the private newsletter. Your email is never shared. </p>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Enter your email..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
          <button className="btn btn-outline-secondary" type="button" id="button-addon2">Sign up</button>
        </div>
      </div>
    </div>
  </div>
  
  
</section>
</>
    )
}

export default Page;