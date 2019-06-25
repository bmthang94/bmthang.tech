import React, { Component } from 'react'

export default class Blog extends Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="section-title">Blogs</h2>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                            <article className="card shadow">
                                <img className="rounded card-img-top" src="images/blog/post-3.jpg" alt="post-thumb" />
                                <div className="card-body">
                                    <h4 className="card-title"><a className="text-dark" href="blog-single.html">Amazon increase income 1.5 Million</a>
                                    </h4>
                                    <p className="cars-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                      incididunt ut labore et
              dolore magna aliqua.</p>
                                    <a href="blog-single.html" className="btn btn-xs btn-primary">Read More</a>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                            <article className="card shadow">
                                <img className="rounded card-img-top" src="images/blog/post-4.jpg" alt="post-thumb" />
                                <div className="card-body">
                                    <h4 className="card-title"><a className="text-dark" href="blog-single.html">Amazon increase income 1.5 Million</a>
                                    </h4>
                                    <p className="cars-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                      incididunt ut labore et
              dolore magna aliqua.</p>
                                    <a href="blog-single.html" className="btn btn-xs btn-primary">Read More</a>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                            <article className="card shadow">
                                <img className="rounded card-img-top" src="images/blog/post-2.jpg" alt="post-thumb" />
                                <div className="card-body">
                                    <h4 className="card-title"><a className="text-dark" href="blog-single.html">Amazon increase income 1.5 Million</a>
                                    </h4>
                                    <p className="cars-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                      incididunt ut labore et
              dolore magna aliqua.</p>
                                    <a href="blog-single.html" className="btn btn-xs btn-primary">Read More</a>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
