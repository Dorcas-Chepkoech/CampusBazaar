import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Navbar
} from 'reactstrap';
import './app.css';
import Footer from '../Footer/Footer';
import Slider from '../Slider/Slider';

const Example = (props) => {
  return (
    <div>
      <div className="slider">
      <Slider style={{height: "10vh"}}/>
      </div>
      
      <div className="blog-search">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <form className="card card-sm">
            <div className="card-body row no-gutters align-items-center">
              <div className="col-auto">
                <i className="fas fa-search h4 text-body" />
              </div>
              {/*end of col*/}
              <div className="col">
                <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords" />
              </div>
              {/*end of col*/}
              <div className="col-auto">
                <button className="btn btn-lg btn-success" type="submit">Search</button>
              </div>
              {/*end of col*/}
            </div>
          </form>
        </div>
        {/*end of col*/}
      </div></div>
    <div className="blog"><h1>Categories</h1>
    <div className="row">
      <a
        href="/clothes"
        className="col-md-3 categories category_left tint"
        style={{
          background:
              'url(https://i.pinimg.com/564x/87/94/3c/87943c5d7832c46e98132891cf1e386f.jpg)',
        }}
      >
        <div align="center">
          <h3>Clothes</h3>
        </div>
      </a>
      
      <a
        href="/laptops"
        className="col-md-3 categories tint"
        style={{
          background:
              'url(https://i.pinimg.com/564x/d4/01/97/d401971b6a9f4413694bb6b4bbe2a0da.jpg)',
        }}
      >
        <div align="center">
          <h3>Laptops and Accessories</h3>
        </div>
      </a>
      <a
        href="/mobilephones"
        className="col-md-3 categories tint"
        style={{
          background:
              'url(https://i.pinimg.com/564x/73/14/33/731433d5f5c692ce85e203a4002c6360.jpg)',
        }}
      >
        <div align="center">
          <h3>Phones and Accessories</h3>
        </div>
      </a>
    
    <hr/>
    <div className="container">
          <h1>Our Featured Products</h1>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="product-grid6">
                <div className="product-image6">
                  <a href="#">
                    <img className="pic-1" src="https://i.pinimg.com/564x/bd/4a/1f/bd4a1f697a9c09a10e96d42ac6dbe556.jpg" />
                  </a>
                </div>
                <div className="product-content">
                  <h3 className="title"><a href="#">Men's Shirt</a></h3>
                  <div className="price">$11.00
                    <span>$14.00</span>
                  </div>
                </div>
                <ul className="social">
                  <li><a href data-tip="Quick View"><i className="fa fa-search" /></a></li>
                  <li><a href data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
                  <li><a href data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid6">
                <div className="product-image6">
                  <a href="#">
                    <img className="pic-1" src="https://i.pinimg.com/564x/be/5c/22/be5c22b559f1c5ef754e7339b937a31a.jpg" />
                  </a>
                </div>
                <div className="product-content">
                  <h3 className="title"><a href="#">Women's Red Top</a></h3>
                  <div className="price">$8.00
                    <span>$12.00</span>
                  </div>
                </div>
                <ul className="social">
                  <li><a href data-tip="Quick View"><i className="fa fa-search" /></a></li>
                  <li><a href data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
                  <li><a href data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid6">
                <div className="product-image6">
                  <a href="#">
                    <img className="pic-1" src="https://i.pinimg.com/564x/93/f6/92/93f692e8385feb03ec37de7cde2956ce.jpg" />
                  </a>
                </div>
                <div className="product-content">
                  <h3 className="title"><a href="#">Men's Shirt</a></h3>
                  <div className="price">$11.00
                    <span>$14.00</span>
                  </div>
                </div>
                <ul className="social">
                  <li><a href data-tip="Quick View"><i className="fa fa-search" /></a></li>
                  <li><a href data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
                  <li><a href data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid6">
                <div className="product-image6">
                  <a href="#">
                    <img className="pic-1" src="https://i.pinimg.com/564x/2f/74/31/2f7431be6b2743ed6b2af5be44fc048a.jpg" />
                  </a>
                </div>
                <div className="product-content">
                  <h3 className="title"><a href="#">Men's Shirt</a></h3>
                  <div className="price">$11.00
                    <span>$14.00</span>
                  </div>
                </div>
                <ul className="social">
                  <li><a href data-tip="Quick View"><i className="fa fa-search" /></a></li>
                  <li><a href data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
                  <li><a href data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
        
   </div>
   <Footer/>
   </div>
   
  );
};

export default Example;