
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { get_url, update_url } from "./URL/url";

const Stuedit = () => {

    const { id } = useParams();

    const history = useNavigate();

    const [student, setstudent] = useState({
        firstname: "",
        lastname: "",
        fathername: "",
        email: "",
        phone:"",
        address: "",
    });


    useEffect(() => {
        axios
          .get(`${get_url}/${id}`)
          .then((res) => {
            setstudent(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [id]);


      const handleUpdate = () => {
        axios
          .put(`${update_url}/${id}`, student)
          .then(() => {
            history("/stulist");
          })
          .catch((err) => {
            console.error(err);
          });
        history("/stulist");
      };
  return (
<div className="container mt-3">
  <h2 className='text-center'>CUSTOMER DETAILS</h2>

  <div className='row mt-5'>


    <div className='col-lg-2'>

    </div>




    <div className='col-lg-8 san p-4'>
    <form>


    <div className='row  mb-3'>
      
      <div className='col-lg-4'>
      <label for="pwd" className='mt-4 bo'>First Name </label>
      </div>

      <div className='col-lg-8'>
      <input type="name" className="form-control mt-3 " id="pwd" placeholder="Enter name"   value={student.firstname}
              onChange={(e) => {
                setstudent({ ...student, firstname: e.target.value });
              }}/>
      </div>
    </div>


    <div className='row  mb-3'>
      
      <div className='col-lg-4'>
      <label for="pwd" className='mt-4 bo'>Last Name </label>
      </div>

      <div className='col-lg-8'>
      <input type="name" className="form-control mt-3 " id="pwd" placeholder="Enter name" value={student.lastname}
              onChange={(e) => {
                setstudent({ ...student, lastname: e.target.value });
              }}/>
      </div>
    </div>

    <div className='row  mb-3'>
      
      <div className='col-lg-4'>
      <label for="pwd" className='mt-4 bo'>Father's Name </label>
      </div>

      <div className='col-lg-8'>
      <input type="name" className="form-control mt-3 " id="pwd" placeholder="Enter name"   value={student.fathername}
              onChange={(e) =>
                setstudent({ ...student, fathername: e.target.value })
              }/>
      </div>
    </div>


      <div className='row mt-4'>
      
        <div className='col-lg-4'>
        <label  for="email" className='mt-2 bo'> Email</label>
        </div>

        <div className='col-lg-8'>
        <input type="email" className="form-control " id="email" placeholder="Enter email" value={student.email} onChange={(e) =>
                setstudent({ ...student, email: e.target.value })
              } />
        </div>
      </div>
 

      <div className='row mt-4'>
      
      <div className='col-lg-4'>
      <label  for="phone" className='mt-2 bo'>Phone No </label>
      </div>

      <div className='col-lg-8'>
      <input type="tel" className="form-control " id="phone" placeholder="Enter No" value={student.phone}
              onChange={(e) =>
                setstudent({ ...student, phone: e.target.value })
              } />
      </div>
    </div>


    <div className='row mt-4'>
      
        <div className='col-lg-4'>
        <label  for="address" className='mt-2 bo'> Address</label>
        </div>

        <div className='col-lg-8'>
        <input type="address" className="form-control " id="address" placeholder="Enter Address" value={student.address}
              onChange={(e) =>
                setstudent({ ...student, address: e.target.value })
              } />
        </div>
      </div>
   
      <button type="submit" className="btn btn-success" onClick={handleUpdate}>
            Update
          </button>
  </form>
  </div>
  </div>

  <div className='col-lg-2'>

    </div>

    </div>
 
    
  )
}

export default Stuedit;