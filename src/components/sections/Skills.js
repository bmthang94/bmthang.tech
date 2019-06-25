import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-title">Skills</h2>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                            <div className="card shadow text-center">
                                <div className="position-relative rounded-top progress-wrapper" data-color="#fdb157">
                                    <div className="wave" data-progress="90%"></div>
                                </div>
                                <div className="card-footer bg-white">
                                    <h4 className="card-title">Web Design (90%)</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                            <div className="card shadow text-center">
                                <div className="position-relative rounded-top progress-wrapper" data-color="#9473e6">
                                    <div className="wave" data-progress="60%"></div>
                                </div>
                                <div className="card-footer bg-white">
                                    <h4 className="card-title">Logo Design (60%)</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                            <div className="card shadow text-center">
                                <div className="position-relative rounded-top progress-wrapper" data-color="#bdecf6">
                                    <div className="wave" data-progress="80%"></div>
                                </div>
                                <div className="card-footer bg-white">
                                    <h4 className="card-title">After Effects (80%)</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                            <div className="card shadow text-center">
                                <div className="position-relative rounded-top progress-wrapper" data-color="#ffbcaa">
                                    <div className="wave" data-progress="70%"></div>
                                </div>
                                <div className="card-footer bg-white">
                                    <h4 className="card-title">Web App (70%)</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
