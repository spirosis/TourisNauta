import React from "react";
import "../../styles/home.css";
import carousel1 from "../../img/carousel1.jpg";
import carousel2 from "../../img/carousel2.jpg";
import carousel3 from "../../img/carousel3.jpg";

export const Carousel = () => {
  return (
    <div
      id="myCarousel"
      className="carousel slide mb-auto"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className=""
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className="active"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className=""
        ></button>
      </div>
      <div className="carousel-inner rounded-5 justify-content-center align-items-center">
        <div class="carousel-item">
          <img className="carousel-image" src={carousel1} />
          <div className="carousel-caption">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>
                Some representative placeholder content for the second slide of
                the carousel.
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Sign up today!
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item active">
          <img className="carousel-image" src={carousel2} />
          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>
                Some representative placeholder content for the second slide of
                the carousel.
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="carousel-image" src={carousel3} />
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>One more for good measure.</h1>
              <p>
                Some representative placeholder content for the third slide of
                this carousel.
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Browse gallery
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
