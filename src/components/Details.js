import React from "react";
import { useNavigate } from "react-router-dom";
import "./rotating-card.css";

function Details(props) {
  const navigate = useNavigate();
  function goToInfos() {
    navigate(`/cv/${props.selCand._id}`);
  }

  return (
    // props.selCand.avatar &&
    <div className="card-container">
      <div className="card">
        <div className="front">
          <div className="cover">
            <img src="images/rotating_card_thumb2.png" />
          </div>
          <div className="user">
            <img
              className="img-circle"
              src={`images/${props.selCand.avatar}`}
            />
          </div>
          <div className="content">
            <div className="main">
              <h3 className="name">
                {props.selCand.prenom} {props.selCand.nom}
              </h3>
              <p className="profession">{props.selCand.age} ans </p>

              <p className="text-center">{props.selCand.profession}</p>
            </div>
            <div className="footer">
              <div className="rating">
                <i className="fa fa-mail-forward"></i> Auto Rotation
              </div>
            </div>
          </div>
        </div>
        <div className="back">
          <div className="header">
            <h5 className="motto">
              "To be or not to be, this is my awesome motto!"
            </h5>
          </div>
          <div className="content">
            <div className="main">
              <h4 className="text-center">Job Description</h4>
              <p className="text-center">
                Web design, Adobe Photoshop, HTML5, CSS3, Corel and many
                others...
              </p>

              <div className="stats-container">
                <div className="stats">
                  <h4>235</h4>
                  <p>Followers</p>
                </div>
                <div className="stats">
                  <h4>114</h4>
                  <p>Following</p>
                </div>
                <div className="stats">
                  <h4>35</h4>
                  <p>Projects</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="social-links text-center">
              <button onClick={goToInfos} className="btn btn-success">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
