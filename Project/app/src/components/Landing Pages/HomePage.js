import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import main_image from "../images/main.png";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <>
      <>
        <Navbar />
        <div className="homepage">
          <div className="container">
            <div className="first__section text-center my-5">
              <h1 className="main__heading">
              Discover the potential of Finvest in empowering entrepreneurs to drive positive global impact through innovative solutions.
              </h1>
              <h2 className="main__desc my-3">
                " Those bold enough to believe in their power to change the world are the ones who ultimately realize that vision. "
              </h2>
              <Link to="/signup" className="btn btn-primary my-5 main__btn">
                {" "}
                Register here{" "}
                <span>
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </Link>
              <h3 className="main__desc my-3">
              Embrace your role in our shared mission to empower every idea, illuminating the world with newfound brilliance.
              </h3>
            </div>
            <div className="second__section">
              <img
                src={main_image}
                alt="main_image"
                className="landing__image"
              />
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Home;
