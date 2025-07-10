import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import './home.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Contact() {
    return (
        <div>
            <Navbar centerText="Contact Us" backgroundImage="https://themewagon.github.io/montana/img/banner/bradcam3.png" />

            {/* Leaflet Map */}
            <div className="d-flex justify-content-center">
                <MapContainer
                    center={[18.5204, 73.8567]} // Pune coordinates
                    zoom={13}
                    scrollWheelZoom={false}
                    style={{ height: "300px", width: "90%" }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[18.5204, 73.8567]}>
                        <Popup>Luxury Stay Hotel, Pune, Maharashtra</Popup>
                    </Marker>
                </MapContainer>
            </div>

            {/* Contact Form */}
            <div className="container">
                <div className="row">
                    <div className="col-md-2 my-5 mt-5 mb-5"></div>
                    <div className="col-md-5 mt-5 mb-5">
                        <h2>Get in Touch</h2>
                        <form>
                            <div className="form-group mt-3">
                                <textarea
                                    className="form-control mt-2"
                                    id="message"
                                    rows="3"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>
                            <div className="form-row mt-4">
                                <div className="form-group col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="yourName"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="form-group col-md-6 mt-4">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>
                            <div className="form-group mt-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="subject"
                                    placeholder="Enter subject"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mt-4">
                                Send
                            </button>
                        </form>
                    </div>
                    <div className="col-md-1 mt-5"></div>
                    <div className="col-md-4 mt-5">
                        <div className="contact-info mt-5">
                            <div className="info-item">
                                <i className="fas fa-map-marker-alt mt-5"></i>
                                <p className="mt-5">Luxury Stay Hotel, Pune, Maharashtra</p>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-phone-alt"></i>
                                <p>+91 98765 43210</p>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-envelope"></i>
                                <p>contact@luxurystaypune.com — Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Contact;
