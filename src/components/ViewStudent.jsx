import React from 'react'
import NavBar from './NavBar'

const ViewStudent = () => {
    return (
        <div>
            <NavBar />

            <div className="container mt-4">
                <div className="row g-4">

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100">
                            <img
                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                className="card-img-top"
                                alt="Student"
                                height="300px"
                            />

                            <div className="card-body text-center">
                                <h5 className="card-title">Rahul Sharma</h5>
                                <p className="card-text">
                                    <strong>Admission No:</strong> STU001
                                </p>
                                <p className="card-text">
                                    <strong>Class:</strong> XII - A
                                </p>

                                <button className="btn btn-primary">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100">
                            <img
                                src="https://randomuser.me/api/portraits/women/2.jpg"
                                className="card-img-top"
                                alt="Student"
                                height="300px"
                            />

                            <div className="card-body text-center">
                                <h5 className="card-title">Anjali Nair</h5>
                                <p className="card-text">
                                    <strong>Admission No:</strong> STU002
                                </p>
                                <p className="card-text">
                                    <strong>Class:</strong> XI - B
                                </p>

                                <button className="btn btn-primary">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100">
                            <img
                                src="https://randomuser.me/api/portraits/men/3.jpg"
                                className="card-img-top"
                                alt="Student"
                                height="300px"
                            />

                            <div className="card-body text-center">
                                <h5 className="card-title">Arun Kumar</h5>
                                <p className="card-text">
                                    <strong>Admission No:</strong> STU003
                                </p>
                                <p className="card-text">
                                    <strong>Class:</strong> X - A
                                </p>

                                <button className="btn btn-primary">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100">
                            <img
                                src="https://randomuser.me/api/portraits/women/4.jpg"
                                className="card-img-top"
                                alt="Student"
                                height="300px"
                            />

                            <div className="card-body text-center">
                                <h5 className="card-title">Meera Joseph</h5>
                                <p className="card-text">
                                    <strong>Admission No:</strong> STU004
                                </p>
                                <p className="card-text">
                                    <strong>Class:</strong> IX - C
                                </p>

                                <button className="btn btn-primary">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default ViewStudent