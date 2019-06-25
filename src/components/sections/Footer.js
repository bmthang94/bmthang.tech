import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark footer-section">
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h5 className="text-light">Email</h5>
                                <p className="text-white paragraph-lg font-secondary">steve.fruits@email.com</p>
                            </div>
                            <div className="col-md-4">
                                <h5 className="text-light">Phone</h5>
                                <p className="text-white paragraph-lg font-secondary">+880 2544 658 256</p>
                            </div>
                            <div className="col-md-4">
                                <h5 className="text-light">Address</h5>
                                <p className="text-white paragraph-lg font-secondary">125/A, CA Commercial Area, California, USA</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-top text-center border-dark py-5">
                    <p className="mb-0 text-light">Copyright ©<script>
                        var CurrentYear = new Date().getFullYear()
                        document.write(CurrentYear)
      </script> a theme by <a href="themefisher.com">themefisher.com</a></p>
                </div>
            </footer>
        )
    }
}
