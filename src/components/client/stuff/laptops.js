import React, { useState, useEffect } from "react";

import ls from "local-storage";

import {
  saveProduct,
  getProduct,
  deleteProduct
} from "../../../api/productApi";

export default function Products() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState();

  // fetching data from the local database
  useEffect(() => {
    getProduct(`/api/getProducts`).then(fetchedData => {
      // console.log(fetchedData);
      setData([...fetchedData]);
      const id = ls.get(`id`);
      const phone = ls.get(`phone`);
      setUser({ ...user });
      setUser({
        ...user,
        id,
        phone
      });
    });
  }, []);

  console.log(user);
  return (<div>
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
                <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search Items" />
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
    <div className="container">
      <h1 style={{color: "black"}}>Laptops</h1>
      <div className="row">
        {data &&
          data.map(product => {
            return (
              <div className="col-md-3 col-sm-6">
                <div className="product-grid6">
                  <div className="product-image6">
                    <a href="#!">
                      <img className="pic-1" src={product.imagePath} />
                    </a>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <a href="#">{product.productName}</a>
                    </h3>
                    <div className="price">
                      {`Ksh ${product.price}`}
                      {/* <span>$14.00</span> */}
                    </div>
                    <div className="description">
                      <p>{product.description}</p>
                    </div>
                  </div>

                  <a href={`/checkout/${product._id}`} className="social">
                    {/* <li>
                      <a href data-tip="Quick View">
                        <i class="fas fa-search"></i>
                      </a>
                    </li> */}
                    <li>
                      <a href data-tip="Buy">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </li>
                    {/* <li>
                      <a href data-tip="Add to Cart">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li> */}
                  </a>
                </div>
              </div>
            );
          })}{" "}
      </div>
    </div>
    </div>
  );
}