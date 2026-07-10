import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewStudent = () => {

    const [data, changeData] = useState(
        [
            { "name": "Rahul Sharma", "avatar": "https://randomuser.me/api/portraits/men/1.jpg", "course": " XII - A", "admn": "STU001"}, 
            { "name": "Anjali Nair", "avatar": "https://randomuser.me/api/portraits/women/2.jpg", "course": " XI - B", "admn": "STU002"}, 
            { "name": "Arun Kumar", "avatar": "https://randomuser.me/api/portraits/men/3.jpg", "course": "X - A", "admn": "STU003"}, 
            { "name": "Meera Joseph", "avatar": "https://randomuser.me/api/portraits/women/4.jpg", "course": "IX - C", "admn": "STU004"}, 
            { "name": "Vishnu Das", "avatar": "https://randomuser.me/api/portraits/men/5.jpg", "course": "VIII - A", "admn": "STU005"}, 
            { "name": "Sneha Menon", "avatar": "https://randomuser.me/api/portraits/women/6.jpg", "course": "VII - B", "admn": "STU006"}
        ]
    )

    return (
        <div>
            <NavBar />

            <div className="container mt-4">
                <div className="row g-4">

                    {/* Student 1 */}
                    {data.map(
                        (value,index) =>{
                            return(
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100">
                            <img
                                src={value.avatar}
                                className="card-img-top"
                                alt="Student"
                                height="300px"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">{value.name}</h5>
                                <p><strong>{value.admn}</strong> STU001</p>
                                <p><strong>{value.course}</strong> XII - A</p>
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>
                            )
                        }
                    )}

                </div>
            </div>

        </div>
    )
}

export default ViewStudent