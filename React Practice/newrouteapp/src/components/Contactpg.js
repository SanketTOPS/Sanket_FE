import React from 'react'

export default function Contactpg() {
    return (
        <div>
            <section className="contact_us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="contact_inner">
                                <div className="row">
                                    <div className="col-md-10">
                                        <div className="contact_form_inner">
                                            <div className="contact_field">
                                                <h3>Contatc Us</h3>
                                                <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                                                <input type="text" className="form-control form-group" placeholder="Name" />
                                                <input type="text" className="form-control form-group" placeholder="Email" />
                                                <textarea className="form-control form-group" placeholder="Message"></textarea>
                                                <button className="contact_form_submit">Send</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="right_conatct_social_icon d-flex align-items-end">
                                            <div className="socil_item_inner d-flex">
                                                <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact_info_sec">
                                    <h4>Contact Info</h4>
                                    <div className="d-flex info_single align-items-center">
                                        <i className="fas fa-headset"></i>
                                        <span>+91 8009 054294</span>
                                    </div>
                                    <div className="d-flex info_single align-items-center">
                                        <i className="fas fa-envelope-open-text"></i>
                                        <span>info@flightmantra.com</span>
                                    </div>
                                    <div className="d-flex info_single align-items-center">
                                        <i className="fas fa-map-marked-alt"></i>
                                        <span>1000+ Travel partners and 65+ Service city across India, USA, Canada & UAE</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="map_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="map_inner">
                                <h4>Find Us on Google Map</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quo beatae quasi assumenda, expedita aliquam minima tenetur maiores neque incidunt repellat aut voluptas hic dolorem sequi ab porro, quia error.</p>
                                <div className="map_bind">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.679931494302!2d70.7723802740499!3d22.290111043267054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca248c77c099%3A0xdf5ac10af64ac8ee!2sTOPS%20Technologies!5e0!3m2!1sen!2sin!4v1739006490776!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}
