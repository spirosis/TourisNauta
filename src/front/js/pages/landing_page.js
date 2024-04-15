import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Carousel } from "../component/carrusel";
import { Location } from "../component/geolocation";
import { SearchPOI } from "../component/SearchPoi";
import { Link } from "react-router-dom";

//Back ground style for activities
// const myStyle = {
//   "background-color": "#e3f2fd",
// };

export const LandingPage = () => {
  const { store, actions } = useContext(Context);
  const [responseData, setResponseData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [clickSearch, setClickSearch] = useState(false);
  // const [newLocation, setNewLocation] = useState('')

  return (
    <div>
      <div className="container p-3 mb-2 my-4 border rounded-5">
        <div className="jumbotron m-5">
          <h1 className="brand fw-bolder text-center">TOURISTNAUTA</h1>
          <p className="lead text-break">
            The app made for you to explore the places you want to discover and
            activities you are dying to do.
          </p>
          <div className="text-center">
            <p>Your current location is :</p>
            <h3>
              <Location />
            </h3>
            <SearchPOI
              clickSearch={clickSearch}
              setClickSearch={setClickSearch}
              searchInput={searchInput}
              responseData={responseData}
              setResponseData={setResponseData}
            />
            <button
              type="button"
              className="btn btn-outline-success btn-sm float-center"
            >
              Change location
            </button>
          </div>
        </div>

        <Carousel />
      </div>
      <div className="act-container container p-3 mb-2 my-4 rounded-5">
        <h1 className="top10 text-center fw-bold"> Top 10 </h1>
        <p className="near-you text-center"> Activities near you</p>
        <form
          className="d-flex mb-2"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="form-control me-2 rounded-2"
            type="search"
            placeholder="Search an activity"
            onChange={(e) => setSearchInput(e.target.value)}
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={() => setClickSearch(true)}
          >
            Search
          </button>
        </form>
        <ol className="list-group list-group-numbered rounded-3">
          {responseData.map((result) => (
            <div class="card-container w-95">
              <div class="card-body">
                <div>
                  <Link class="card-title" to={`/activity/${result.id}`}>
                    {result.name}
                  </Link>
                </div>

                {result.address}
                <span className="badge bg-primary rounded-pill float-end">
                  {result.category}
                </span>
                <div className="col-10 mt-3px">
                  <button
                    className="col-8 ml-auto"
                    href={`/activity/${result.id}`}
                    class="btn btn-sm btn-primary"
                  >
                    More Info
                  </button>
                </div>
              </div>
            </div>

            // <li className="list-group-item d-flex justify-content-between align-items-start">
            //   <div className="ms-2 me-auto">
            //     <div className="fw-bold">
            //       <Link to={`/activity/${result.id}`}>{result.name}</Link>
            //     </div>
            //     {result.address}
            //   </div>
            //   <span className="badge bg-primary rounded-pill">
            //     {result.category}
            //   </span>
            // </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
