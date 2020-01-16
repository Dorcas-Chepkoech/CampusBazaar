import React from 'react';
import "./app.css";
export default function Slider() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
      <li data-target="#carouselExampleIndicators" data-slide-to={1} />
      <li data-target="#carouselExampleIndicators" data-slide-to={2} />
    </ol>
    <div className="carousel-inner" role="listbox">
      <div className="carousel-item fill-ful active" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")'}}>
        <div className="container">
          <div className="carousel-caption">
            <h1 className="h11">First-class social marketplace for students to save and make money.</h1><br/>
            <p className="p">At Baazar you can buy or sell books, electronics, your old clothes...exclusively at your campus!</p>
            <p><a className="btn btn-default" href="#" role="button">Sign Up TODAY!</a></p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  )
}
