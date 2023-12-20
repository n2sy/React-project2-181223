import React from 'react'
import './rotating-card.css'

function Details() {
    return (
        <div className="card-container">
            <div className="card">
                <div className="front">
                    <div className="cover">
                        <img src="images/rotating_card_thumb2.png" />
                    </div>
                    <div className="user">
                        <img className="img-circle" src="images/rotating_card_profile.png" />
                    </div>
                    <div className="content">
                        <div className="main">
                            <h3 className="name">Inna Corman</h3>
                            <p className="profession">Product Manager</p>

                            <p className="text-center">"I'm the new Sinatra, and since I made it here I can make it anywhere, yeah, they love me everywhere"</p>
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
                        <h5 className="motto">"To be or not to be, this is my awesome motto!"</h5>
                    </div>
                    <div className="content">
                        <div className="main">
                            <h4 className="text-center">Job Description</h4>
                            <p className="text-center">Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...</p>

                            <div className="stats-container">
                                <div className="stats">
                                    <h4>235</h4>
                                    <p>
                                        Followers
                                    </p>
                                </div>
                                <div className="stats">
                                    <h4>114</h4>
                                    <p>
                                        Following
                                    </p>
                                </div>
                                <div className="stats">
                                    <h4>35</h4>
                                    <p>
                                        Projects
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="footer">
                        <div className="social-links text-center">
                            <a href="https://creative-tim.com" class="facebook"><i class="fa fa-facebook fa-fw"></i></a>
                            <a href="https://creative-tim.com" class="google"><i class="fa fa-google-plus fa-fw"></i></a>
                            <a href="https://creative-tim.com" class="twitter"><i class="fa fa-twitter fa-fw"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details