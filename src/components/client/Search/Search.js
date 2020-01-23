import React from 'react';
import "./search.css";

export default function Search() {
    return (
        <div className="container">
        <br />
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
                  <button className="btn" type="submit">Search</button>
                </div>
                {/*end of col*/}
              </div>
            </form>
          </div>
          {/*end of col*/}
        </div>
      </div>
    )
}
