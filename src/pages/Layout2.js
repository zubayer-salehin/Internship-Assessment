import React from 'react';


const Layout2 = () => {

    const allUser = JSON.parse(localStorage.getItem("userList"))

    return (
        <div className='screen-width-height d-flex justify-content-center screen-backgroud pt-5'>
            <div className="userList shadow-lg">
                <h4 className='mb-4 text-center'>USER LIST</h4>
                <div className="table-responsive">
                    <table className="table table-bordered mb-0">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Date Of Birth</th>
                                <th scope="col">Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUser.length && allUser.map((user, i) => <tr key={Math.random() * 1000}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.dateOfBirth}</td>
                                <td>{user.phone}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};


export default Layout2;