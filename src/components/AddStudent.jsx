import React from 'react'

const AddStudent = () => {
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12">

                        <div className="row">
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Admission Number</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Full Name</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Date Of Birth</label>
                                <input type="date" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Gender</label>
                                <select name="" id="" className="form-select">
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                    <option value="">Other</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Grade</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Section</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Parent Name</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Contact Number</label>
                                <input type="tel" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">E-mail</label>
                                <input type="text" className="form-control" placeholder="abc@mail" />

                            </div>
                            <div className="col col-12">

                                <label htmlFor="" className="form-label">Address</label>
                                <input type="textarea" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <button className="btn btn-success">Add</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddStudent