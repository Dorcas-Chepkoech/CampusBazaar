import React from 'react';
import "./app.css"

export default function Contact() {
    return (
        <div>
            <section className="contact pt-100 pb-100" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 mx-auto text-center">
              <div className="section-title mb-100">
                
                <h4>Contact Us</h4>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-8">
              <form action="#" className="contact-form">
                <div className="row">
                  <div className="col-xl-6">
                    <input type="text" placeholder="name" />
                  </div>
                  <div className="col-xl-6">
                    <input type="text" placeholder="email" />
                  </div>
                  <div className="col-xl-6">
                    <input type="text" placeholder="subject" />
                  </div>
                  <div className="col-xl-6">
                    <input type="text" placeholder="telephone" />
                  </div>
                  <div className="col-xl-12">
                    <textarea placeholder="message" cols={30} rows={10} defaultValue={""} />
                    <input type="submit" defaultValue="send message" />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-4">
              <div className="single-contact">
                <i className="fa fa-map-marker" />
                <h5>Address</h5>
                <p>661 Lefferts, NY 11203, USA</p>
              </div>
              <div className="single-contact">
                <i className="fa fa-phone" />
                <h5>Phone</h5>
                <p>(+1) 517 397 7100</p>
              </div>
              <div className="single-contact">
                <i className="fa fa-envelope" />
                <h5>Email</h5>
                <p>infor@personal.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}
