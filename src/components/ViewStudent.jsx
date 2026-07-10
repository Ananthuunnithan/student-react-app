import React from 'react'
import NavBar from './NavBar'

const ViewStudent = () => {
    return (
        <div>
            <NavBar />

            <div className="container mt-4">
                <div className="row g-4">

                    {/* Student 1 */}
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
                                <p><strong>Admission No:</strong> STU001</p>
                                <p><strong>Class:</strong> XII - A</p>
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>

                    {/* Student 2 */}
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
                                <p><strong>Admission No:</strong> STU002</p>
                                <p><strong>Class:</strong> XI - B</p>
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>

                    {/* Student 3 */}
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
                                <p><strong>Admission No:</strong> STU003</p>
                                <p><strong>Class:</strong> X - A</p>
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>

                    {/* Student 4 */}
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
                                <p><strong>Admission No:</strong> STU004</p>
                                <p><strong>Class:</strong> IX - C</p>
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>

                    {/* Student 5 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100">
                            <img
                                src="https://randomuser.me/api/portraits/men/5.jpg"
                                className="card-img-top"
                                alt="Student"
                                height="300px"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Vishnu Das</h5>
                                <p><strong>Admission No:</strong> STU005</p>
                                <p><strong>Class:</strong> VIII - A</p>
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>

                    {/* Student 6 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100">
                            <img
                                src="https://randomuser.me/api/portraits/women/6.jpg"
                                className="card-img-top"
                                alt="Student"
                                height="300px"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Sneha Menon</h5>
                                <p><strong>Admission No:</strong> STU006</p>
                                <p><strong>Class:</strong> VII - B</p>
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>

                    {/* Student 7 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100">
                            <img
                                src="https://randomuser.me/api/portraits/men/7.jpg"
                                className="card-img-top"
                                alt="Student"
                                height="300px"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Akash Roy</h5>
                                <p><strong>Admission No:</strong> STU007</p>
                                <p><strong>Class:</strong> VI - C</p>
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>

                    {/* Student 8 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100">
                            <img
                                src="https://randomuser.me/api/portraits/women/8.jpg"
                                className="card-img-top"
                                alt="Student"
                                height="300px"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Priya Thomas</h5>
                                <p><strong>Admission No:</strong> STU008</p>
                                <p><strong>Class:</strong> V - A</p>
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>

                    {/* Student 9 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100">
                            <img
                                src="https://randomuser.me/api/portraits/men/9.jpg"
                                className="card-img-top"
                                alt="Student"
                                height="300px"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Rohan Singh</h5>
                                <p><strong>Admission No:</strong> STU009</p>
                                <p><strong>Class:</strong> IV - B</p>
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>

                    {/* Student 10 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100">
                            <img
                                src="https://randomuser.me/api/portraits/women/10.jpg"
                                className="card-img-top"
                                alt="Student"
                                height="300px"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Neha Kapoor</h5>
                                <p><strong>Admission No:</strong> STU010</p>
                                <p><strong>Class:</strong> III - A</p>
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ViewStudent