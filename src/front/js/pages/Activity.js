import "../../styles/home.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// const API_URL = `https://api.foursquare.com/v3/places/search`;
const API_KEY = `fsq36n4VDirwVjuExOsAhVU+3oLweispAYAg5bmsTeT9gUg=`;

export const Activity = () => {
  const [result, setResult] = useState({});
  const { id } = useParams();
  const [requestStatus, setRequestStatus] = useState("pending");
  const [photosURL, setPhotosURL] = useState([]);

  const getDetails = async () => {
    let response = await fetch(`https://api.foursquare.com/v3/places/${id}`, {
      method: "GET",
      headers: { Authorization: API_KEY },
    });
    let photoResponse = await fetch(
      `https://api.foursquare.com/v3/places/${id}/photos`,
      {
        method: "GET",
        headers: { Authorization: API_KEY },
      }
    );

    if (!response.ok) {
      setRequestStatus("error");
    } else if (response.ok && photoResponse.ok) {
      let data = await response.json();
      let photoData = await photoResponse.json();

      setResult(data);
      setPhotosURL(photoData);
      setRequestStatus("done");
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  switch (requestStatus) {
    case "pending":
      return <div>loading...</div>;
    case "done":
      return (
        <div className="container col-8">
          <div className="row justify-content-center">
            <p></p>
            <p>{result.categories.name}</p>
            {id}

            <header className="header-activity py-5 border-bottom mb-3 rounded-5">
              <div class="container">
                <div className="text-center">
                  <h1 className="place-name fw-bolder">{result.name}</h1>
                  <p className="lead">{result.location.formatted_address}</p>
                </div>
              </div>
            </header>
            <div
              id="carouselExampleIndicators"
              classNamw="carousel slide mb-auto"
            >
              <div className="carousel-indicators">
                {photosURL.map((item, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : "false"}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner-act rounded-5">
                {photosURL.map((item, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={`${item.prefix}900x500${item.suffix}`}
                      className="carousel-image-activity"
                      alt="carousel-image-activity"
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      );

    default:
      return <div>an error ocurred while loading data</div>;
  }
};
