import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { delete_url, get_url } from "./URL/url";
import { Link } from "react-router-dom";

const Stulist = () => {

  const [data1, setdata1] = useState([]);
  const [ref, setref] = useState(true);
  console.log(data1);


  useEffect(() => {
    axios.get(get_url).then((res) => {
    //   console.log(res.data);
      setdata1(res.data);
    });
  }, [ref]);
  const del = (v) => {
    axios.delete(`${delete_url}/${v._id}`).then((res) => {
      setref(!ref);
    });

};
  return (
    <div class="container mt-5">

<div className="row text-center">
<div className="col-lg-6 ">
<button className="btn btn-success "><Link to={`/`} style={{ textDecoration: 'none', color: 'white' }}> Student Details</Link> </button>
</div>
<div className="col-lg-6">
<button className="btn btn-success "><Link to={`/stulist`} style={{ textDecoration: 'none', color: 'white' }}> Student List</Link> </button>
</div>
</div>


    <table className="table table-bordered mt-5">
      <thead>
        <tr>
        <th scope="col" className="bg-success">First Name</th>
        <th scope="col" className="bg-success">Last Name</th>
        <th scope="col" className="bg-success">Father Name</th>
          <th scope="col" className="bg-success">Email</th>
          <th scope="col" className="bg-success">Phone No</th>
          <th scope="col" className="bg-success">Address</th>
          
          
          <th scope="col" className="bg-success">Action</th> 
        </tr>
      </thead>
      
      <tbody>
      {data1.map((v, index) => (
        <tr key={index}>
            <td>{v.firstname}</td>
            <td>{v.lastname}</td>
            <td>{v.fathername}</td>
          <td>{v.email}</td>
          <td>{v.phone}</td>
          <td>{v.address}</td>
          
     
         
          <td>
          <button className="btn btn-dark"><Link to={`/update/${v._id}`} style={{ textDecoration: 'none', color: 'white' }}> Edit</Link> </button>
            <button className="btn btn-dark ms-3" onClick={() => del(v)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
      
    </table>


  </div>
  )
}

export default Stulist