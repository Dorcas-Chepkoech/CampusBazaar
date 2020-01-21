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

              <img src="https://i.pinimg.com/564x/b0/67/21/b06721c456a32c05c0d264ae2ac3bf21.jpg"/>
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
                <h1>Contact info</h1>
                <h2>Details</h2>
              </div>
              {/* /.title */}
              <div className="single-contact-info">
                <h3>{singleProduct.description}</h3>
                
              </div>
              {/* /.single-contact-info */}
              <div className="single-contact-info">
                <h3>Location:</h3>
  <h3>{singleProduct.location}</h3>
                
              </div>
              {/* /.single-contact-info */}
              <div className="single-contact-info">
                <h3>Email:</h3>
                <h3>dorrchep@gmail.com</h3>
              </div>
              {/* /.single-contact-info */}
              <div className="single-contact-info">
                <h3>Contact: +254 723352844</h3>
               
                
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
