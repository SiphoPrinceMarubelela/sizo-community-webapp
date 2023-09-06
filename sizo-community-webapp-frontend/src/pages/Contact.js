import React, { Fragment } from 'react';
import Menu from './Menu';
import Footer from './Footer';

function Contact() {
    return (
        <Fragment>

            <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
                <div className="container text-light">
                    <div className="w-100 d-flex justify-content-between">
                        <div>
                            <i className="fa fa-envelope mx-2"></i>
                            <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">info@company.com</a>
                            <i className="fa fa-phone mx-2"></i>
                            <a className="navbar-sm-brand text-light text-decoration-none" href="tel:010-020-0340">010-020-0340</a>
                        </div>
                        <div>
                            <a className="text-light" href="https://fb.com/templatemo" target="_blank" rel="sponsored"><i className="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
                            <a className="text-light" href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram fa-sm fa-fw me-2"></i></a>
                            <a className="text-light" href="https://twitter.com/" target="_blank"><i className="fab fa-twitter fa-sm fa-fw me-2"></i></a>
                            <a className="text-light" href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin fa-sm fa-fw"></i></a>
                        </div>
                    </div>
                </div>
            </nav>

            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex justify-content-between align-items-center">

                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Menu />

                </div>
            </nav>

            <div className="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="w-100 pt-1 mb-5 text-right">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form action="" method="get" className="modal-content modal-body border-0 p-0">
                        <div className="input-group mb-2">
                            <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
                            <button type="submit" className="input-group-text bg-success text-light">
                                <i className="fa fa-fw fa-search text-white"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Contact Us</h1>
                    <p>
                        Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>

            {/*
            <div id="mapid" style="width: 100%; height: 300px;"></div>
            <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
            <script>
                var mymap = L.map('mapid').setView([-23.013104, -43.394365, 13], 13);

                L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                    maxZoom: 18,
                attribution: 'Zay Telmplte | Template Design by <a href="https://templatemo.com/">Templatemo</a> | Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1
                }).addTo(mymap);

                L.marker([-23.013104, -43.394365, 13]).addTo(mymap)
                .bindPopup("<b>Zay</b> eCommerce Template<br />Location.").openPopup();

                mymap.scrollWheelZoom.disable();
                mymap.touchZoom.disable();
            </script>
            */}

            <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto" method="post" role="form">
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label for="inputname">Name</label>
                                <input type="text" className="form-control mt-1" id="name" name="name" placeholder="Name" />
                            </div>
                            <div className="form-group col-md-6 mb-3">
                                <label for="inputemail">Email</label>
                                <input type="email" className="form-control mt-1" id="email" name="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="inputsubject">Subject</label>
                            <input type="text" className="form-control mt-1" id="subject" name="subject" placeholder="Subject" />
                        </div>
                        <div className="mb-3">
                            <label for="inputmessage">Message</label>
                            <textarea className="form-control mt-1" id="message" name="message" placeholder="Message" rows="8"></textarea>
                        </div>
                        <div className="row">
                            <div className="col text-end mt-2">
                                <button type="submit" className="btn btn-success btn-lg px-3">Let’s Talk</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />

            <script src="assets/js/jquery-1.11.0.min.js"></script>
            <script src="assets/js/jquery-migrate-1.2.1.min.js"></script>
            <script src="assets/js/bootstrap.bundle.min.js"></script>
            <script src="assets/js/templatemo.js"></script>
            <script src="assets/js/custom.js"></script>

        </Fragment>
    )
}

export default Contact;