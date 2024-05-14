import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { get_url, post_url,} from "../src/URL/url";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./studetails.css"


const Studetails = () => {

    const [firstname , setfirstname] = useState("");
    const [lastname , setlastname] = useState("");
    const [fathername , setfathername] = useState("");
    const [email , setemail] = useState("");
    const [phone , setphone] = useState("");
    const [address , setaddress] = useState("");
    let navigate = useNavigate();
 

    const[data1 ,setdata1]=useState([]);
    // const[ref,setref]=useState(true);


    const post = async()=>{
        await axios.post(post_url,{
    
        firstname,
        lastname,
        fathername,
         email,
         phone,
         address,
        
        })
        navigate("/stulist");
    }

    useEffect(()=>{
        axios.get(get_url).then((res)=>{
          setdata1(res.data)
        });
      },[]);
      
      

  return (
    <>


<div className="container mt-3">

<div className="row text-center">
<div className="col-lg-6 ">
<button className="btn btn-success "><Link to={`/`} style={{ textDecoration: 'none', color: 'white' }}> Student Details</Link> </button>
</div>
<div className="col-lg-6">
<button className="btn btn-success "><Link to={`/stulist`} style={{ textDecoration: 'none', color: 'white' }}> Student List</Link> </button>
</div>
</div>
  <h2 className='text-center mt-5'>CUSTOMER DETAILS</h2>

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
      <input type="name" className="form-control mt-3 " id="pwd" placeholder="Enter name"  value={firstname} onChange={(e)=>setfirstname(e.target.value)}/>
      </div>
    </div>


    <div className='row  mb-3'>
      
      <div className='col-lg-4'>
      <label for="pwd" className='mt-4 bo'>Last Name </label>
      </div>

      <div className='col-lg-8'>
      <input type="name" className="form-control mt-3 " id="pwd" placeholder="Enter name"  value={lastname} onChange={(e)=>setlastname(e.target.value)}/>
      </div>
    </div>

    <div className='row  mb-3'>
      
      <div className='col-lg-4'>
      <label for="pwd" className='mt-4 bo'>Father's Name </label>
      </div>

      <div className='col-lg-8'>
      <input type="name" className="form-control mt-3 " id="pwd" placeholder="Enter name"  value={fathername} onChange={(e)=>setfathername(e.target.value)}/>
      </div>
    </div>


      <div className='row mt-4'>
      
        <div className='col-lg-4'>
        <label  for="email" className='mt-2 bo'> Email</label>
        </div>

        <div className='col-lg-8'>
        <input type="email" className="form-control " id="email" placeholder="Enter email" value={email} 
                     onChange={(e)=>setemail(e.target.value)} />
        </div>
      </div>
 

      <div className='row mt-4'>
      
      <div className='col-lg-4'>
      <label  for="phone" className='mt-2 bo'>Phone No </label>
      </div>

      <div className='col-lg-8'>
      <input type="tel" className="form-control " id="phone" placeholder="Enter No" value={phone} 
                   onChange={(e)=>setphone(e.target.value)} />
      </div>
    </div>


    <div className='row mt-4'>
      
        <div className='col-lg-4'>
        <label  for="address" className='mt-2 bo'> Address</label>
        </div>

        <div className='col-lg-8'>
        <input type="address" className="form-control " id="address" placeholder="Enter Address" value={address} 
                     onChange={(e)=>setaddress(e.target.value)} />
        </div>
      </div>
   
  
  </form>

  <button type="submit" className="btn btn-success mt-4" onClick={post}>Submit</button>
    </div>
    <div className='col-lg-2'>

    </div>
  </div>
 
</div>
    </>
  )
}

export default Studetails