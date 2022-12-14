import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Contacts extends Component {
  render() {
    return (
      <section className="my-5 py-5">
        <div className='container'>
          <div className='well well-sm'>
            <h3><strong>Our Location</strong></h3>
          </div>
          <div className='row'>
            <div className='col-md-7'>
            <iframe title="location" src="https://www.google.com/maps/d/embed?mid=1RQ_mQH0MDBGSd4z1Cq21FdGcJM1-av4&ehbc=2E312F" style={{ border: '0', width:"100%", height:"315px", frameborder: '0' }} allowFullscreen></iframe>
            </div>
            <div className='col-md-5'>
              <h4><strong>Contact Us</strong></h4>
              <form>
                <div className='form-group'>
                  <input type="text" className="form-control mt-2" placeholder="Name" />
                </div>
                <div className='form-group'>
                  <input type="email" className="form-control mt-3" placeholder="Email" />
                </div>
                <div className='form-group'>
                  <input type="tel" className="form-control mt-3" placeholder="Phone" />
                </div>
                <textarea className='form-control mt-3' cols='30' rows='3' placeholder='Message' />
                <Link to="/" className="btn btn-outline-primary text-uppercase mt-2">
                  <i className="fa fa-paper-plane-o" aria-hidden="true" />
                  <i className="fab fa-telegram-plane" />
                  &nbsp;Send
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
