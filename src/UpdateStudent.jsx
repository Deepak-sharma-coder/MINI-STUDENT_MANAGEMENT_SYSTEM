import './CreateStudent.css'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import {useEffect, useState} from 'react'

const UpdateStudent = () => {
  const {id} = useParams()
  const [NAME, setNAME] = useState()
  const [EMAIL, setEMAIL] = useState()
  const [AGE, setAGE] = useState()
  const [BRANCH, setBRANCH] = useState()
  //for navigate 
  const navigate = useNavigate()

  //To Display the new record so we used the useEffect hooks
    useEffect(() =>{
      axios.get('http://localhost:8080/getStudent/'+id)
      .then(result => {console.log(result)
        setNAME(result.data.NAME)
        setEMAIL(result.data.EMAIL)
        setAGE(result.data.AGE)
        setBRANCH(result.data.BRANCH)
      })
      .catch(error => console.log(error))
    }, [])

    const Update = (e) =>{
     e.preventDefault()//Means don't go to next page
     //here we used the put method because we update the Student Data
     axios.put("http://localhost:8080/updateStudent/"+id, {NAME,EMAIL,AGE,BRANCH})
      .then(result => console.log(result))
      //here we used the navigate because when we add the data when we goes to the Home 
      navigate('/')
      .catch(error => console.log(error))
    }

  return (
   <div className="d-flex vh-100 bg-danger justify-content-center align-items-center ">
      <div className="w-50 bg-white hover:bg-blue-700 rounded p-3 border border-black-500">
        <form onSubmit={Update}> 
          <h3 className="text-center" id='heading'>UPDATE STUDENT</h3>
          <div className="mb-3">
            <label htmlFor="" className="w-100">Name</label>
            <input type='text' placeholder="Enter Name" className="from-control" 
            value={NAME} onChange={(e) => setNAME(e.target.value)}/>
          </div>
 
          <div className="mb-3">
            <label htmlFor="" className="w-100">Email</label>
            <input type='email' placeholder="Enter Email" className="from-control" 
            value={EMAIL} onChange={(e) => setEMAIL(e.target.value)}/>
          </div>

          <div className="mb-3">
            <label htmlFor="" className="w-100">Age</label>
            <input type='text' placeholder="Enter Age" className="from-control" 
            value={AGE} onChange={(e) => setAGE(e.target.value)}/>
          </div>

           <div className="mb-3">
            <label htmlFor="" className="w-100">Branch</label>
            <input type='text' placeholder="Enter Branch" className="from-control" 
            value={BRANCH} onChange={(e) => setBRANCH(e.target.value)}/>
          </div>

          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateStudent