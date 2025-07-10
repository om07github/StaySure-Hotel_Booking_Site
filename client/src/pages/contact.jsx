import React from "react";
import Navbar from "../components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import './home.css'
import Footer from "../components/footer";

function Contact() {
    return (
        <div>
            <Navbar centerText="Contact Us" backgroundImage="https://themewagon.github.io/montana/img/banner/bradcam3.png" />

            <div className="d-flex justify-content-center">
                <div className="map-container w-100">
                <iframe
                    src="https://www.google.com/maps/vt/data=vRGoC8Sb58-A2OpJWhidDyCD_S-UDwFCf_xFeCGnqO7P9e7IXlcOJrltoVjI1ikwOhTIw_3jVopBNz6t0-bLLQzQhY1mzEIxmfdYbdaQdUkmOJQ_45olZ4MgNYoFXrj0bYvgxy08NegQTVCUmWPVWJfsL44-gm8rylG1Fj95YMq6FRdg3XxJbpu7r6WFJXbe9HQLTMnh6DxycnuNAvs3seU3-_SRgaQLwgR2mQlOUo28FkLqWuzjib1lDT99QhITUBRp3z9vrS5LLYrWf8ar0ejG6UMqnTCmBBjwjxPSCH0"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />


                </div>

            </div>

            <div className="container">
                <div className="row ">
                    <div className="col-md-2 my-5 mt-5 mb-5"></div>
                    <div className="col-md-5 mt-5 mb-5">
                        <h2>Get in Touch</h2>
                        <form>
                            <div className="form-group mt-3">
                                <textarea className="form-control mt-2" id="name" rows="3" placeholder="Enter your message"></textarea>
                            </div>
                            <div className="form-row mt-4">
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" id="yourName" placeholder="Enter your name" />
                                </div>
                                <div className="form-group col-md-6 mt-4">
                                
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                </div>
                            </div>
                            <div className="form-group mt-4">
                                <input type="text" className="form-control" id="subject" placeholder="Enter subject" />
                            </div>
                            <button type="submit" className="btn btn-primary mt-4 ">Send</button>
                        </form>
                    </div>
                    <div className="col-md-1 mt-5"></div>
                    <div className="col-md-4 mt-5 ">
                        <div className="contact-info mt-5">
                            <div className="info-item ">
                                <i className="fas fa-map-marker-alt mt-5"></i>
                                <p className="mt-5">Luzury Stay Hotel , Suite 900</p>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-phone-alt"></i>
                                <p>+92 317 0241586</p>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-envelope"></i>
                                <p>info@luxurystay.com Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           <Footer/>
        </div>


    );
}

export default Contact