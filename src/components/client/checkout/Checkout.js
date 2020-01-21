import React, { useEffect, useState } from "react";
import "./checkout.css";

import {
  saveProduct,
  getProductById,
  deleteProduct
} from "../../../api/productApi";

export default function Checkout(props) {
  console.log(props.match.params.id);

  const [singleProduct, setSingleProduct] = useState({});

  // fetching data from the local database
  useEffect(() => {
    getProductById(`/api/getProductsById/${props.match.params.id}`).then(
      fetchedData => {
        console.log(fetchedData);
        setSingleProduct({ ...fetchedData });
        // console.log(singleProduct);
      }
    );
  }, []);

  return (
    <div>
      <div className="thm-container">
        <div className="row">
          <div className="col-md-8">
            <div className="contact-form-content">
              {/* /.title */}

              <img src="{singleProduct.imagePath}"/>
              <div className="form-result" />
              {/* /.form-result */}
            </div>
            {/* /.contact-form-content */}
          </div>
          {/* /.col-md-8 */}
          <hr />
          <div className="col-md-4">
            <div className="contact-info text-center">
              <div className="title text-center">
                <span>Contact info</span>
                <h2>Details</h2>
              </div>
              {/* /.title */}
              <div className="single-contact-info">
                <h3>{singleProduct.description}</h3>
                
              </div>
              {/* /.single-contact-info */}
              <div className="single-contact-info">
                <h3>Location:</h3>
                <p>{singleProduct.location}</p>
              </div>
              e{/* /.single-contact-info */}
              <div className="single-contact-info">
                <h3>Email:</h3>
                <p>{singleProduct.email}</p>
              </div>
              {/* /.single-contact-info */}
              <div className="single-contact-info">
                <h3>Contact</h3>
                <div className="social">
                  <a href="#" className="fab fa-twitter hvr-pulse" />
                  {/*
                   */}
                  <a href="#" className="fabe fa-pinterest hvr-pulse" />
                  {/*
                   */}
                  <a href="#" className="fab fa-facebook-f hvr-pulse" />
                  {/*
                   */}
                  <a href="#" className="fab fa-youtube hvr-pulse" />
                </div>
                {/* /.social */}
              </div>
              {/* /.single-contact-info */}
            </div>
            {/* /.contact-info */}
          </div>
          {/* /.col-md-4 */}
        </div>
        {/* /.row */}
      </div>
    </div>
  );
}
