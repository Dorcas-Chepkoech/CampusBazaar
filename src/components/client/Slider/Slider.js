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
      <div className="carousel-item fill-ful active" style={{backgroundImage: 'url("https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")'}}>
        <div className="container">
          <div className="carousel-caption">
            <h1 className="h11">First-class social marketplace for students to save and make money.</h1><br/>
            <p className="p">At Baazar you can buy or sell books, electronics, your old clothes...exclusively at your campus!</p>
            <p><a className="btn btn-default" href="signup" role="button">Sign Up TODAY!</a></p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  )
}
