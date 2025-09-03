import { useState } from 'react'
import './CreateStudent.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CreateStudent = () => {
  //create State Variable
  const [NAME, setNAME] = useState()
  const [EMAIL, setEMAIL] = useState()
  const [AGE, setAGE] = useState()
  const [BRANCH, setBRANCH] = useState()
  //for navigate 
  const navigate = useNavigate()

  //create a event listener
  const Submit = (e) =>{
    e.preventDefault();//Means don't go to next page
    axios.post("http://localhost:8080/CreateStudent", {NAME,EMAIL,AGE,BRANCH})
      .then(result => {
        console.log(result)
        
        navigate('/')
      })
      //here we used the navigate because when we add the data when we goes to the Home 
      .catch(error => console.log(error))
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center ">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}> 
          <h3 className="text-center" id='heading'>ADD STUDENT</h3>
          <div className="mb-3">
            <label htmlFor="" className="w-100">Name</label>
            <input type='text' placeholder="Enter Name" required className="from-control" onChange={(e) => setNAME(e.target.value)}/>
          </div>

          <div className="mb-3">
            <label htmlFor="" className="w-100">Email</label>
            <input type='email' placeholder="Enter Email" required className="from-control" onChange={(e) => setEMAIL(e.target.value)}/>
          </div>

          <div className="mb-3">
            <label htmlFor="" className="w-100">Age</label>
            <input type='text' placeholder="Enter Age" required className="from-control" onChange={(e) => setAGE(e.target.value)} />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="w-100">Branch</label>
            <input type='text' placeholder="Enter Branch" required className="from-control" onChange={(e) => setBRANCH(e.target.value)} />
          </div>

          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateStudent