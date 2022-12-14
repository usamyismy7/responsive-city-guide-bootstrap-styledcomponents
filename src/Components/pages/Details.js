import React, { Component } from "react";
import { InfoConsumer } from "../Context";
import styled from "styled-components";
import Reviews from "../Reviews";

export default class Details extends Component {
  render() {
    return (
    <InfoConsumer>
      {data => {
        const {
          id,
          headerTitle,
          headerSubTitle,
          headerText,
          img,
          title,
          maps,
          description,
        } = data.detailInfo;
        return(
          <React.Fragment>
            <HeaderDetails className="container-fluid align-items-center">
              <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
              <h4 className="display-5">{headerSubTitle}</h4>
              <p>{headerText}</p>
              {/* Social Icons */}
              <div className="container mt-5">
                <div className="row justify-content-center">
                  <div className="col-2">
                    <i className="fab fa-facebook-f" />
                  </div>
                  <div className="col-2">
                    <i className="fab fa-twitter" />
                  </div>
                  <div className="col-2">
                    <i className="fab fa-google-plus-g" />
                  </div>
                  <div className="col-2">
                    <i className="fab fa-reddit" />
                  </div>
                  <div className="col-2">
                    <i className="fab fa-whatsapp" />
                  </div>
                  <div className="col-2">
                    <i className="fab fa-facebook-messenger" />
                  </div>
                </div>
              </div>
            </HeaderDetails>
            {/* Nav Link */}
            <div className="container">
              <ul className="nav nav-tabs">
                {/* About Place Link */}
                <li className="nav-item">
                  <a className="nav-link active" href="#aboutPlace" role="tab" data-bs-toggle="tab">About Place</a>
                </li>
                {/* Reviews Link */}
                <li className="nav-item">
                  <a className="nav-link" href="#reviews" role="tab" data-bs-toggle="tab">Reviews</a>
                </li>
                {/* Map Link */}
                <li className="nav-item">
                  <a className="nav-link" href="#map" role="tab" data-bs-toggle="tab">Map</a>
                </li>
              </ul>
              {/* Tab Pane */}
              <div className="tab-content mb-5">
                {/* About Place Tab */}
                <div id="aboutPlace" className="tab-pane in active text-center mt-5" role="tabpanel">
                  <h2 className="mb-3">{title}</h2>
                  <p>{description}</p>
                  <img src={img} alt={title} className="img-thumbnail img-fluid" />
                </div>
                {/* Reviews */}
                <div className="tab-pane" id="reviews" role="tabpanel">
                  <Reviews />
                </div>
                {/* Map */}
                <div className="tab-pane" id="map" role="tabpanel">
                  <iframe title="location" src={maps} style={{border: "0", height: "28.125rem", width: "100%", frameborder: "0"}}/>
                </div>
              </div>
            </div>
          </React.Fragment>
        )
      }}
    </InfoConsumer>
    )
  }
}

const HeaderDetails = styled.header`
  background: linear-gradient(rgba(109,109,109), rgba(255,255,255));
  height: 100vh;
  text-transform: uppercase;
  color: var(--mainWhite);
  text-align: center;

  h1 {
    padding-top: 10%;
    color: var(--mainDark);
  }

  h4 {
    color: var(--mainDark);
  }

  p {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 10%;
    color: var(--mainDark);
  }

  i {
    font-size: 1.875rem;
    color: var(--mainDark);
  }

  i:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }

  .nav-item {
    height: 18.75rem;
  }

  @media(max-width: 760px) {
    h1,h4{
      color: var(--mainWhite);
    }
  }
`;