import { useEffect } from "react"
import { useState } from "react"
import "./StudentTable.css"
import {Link} from 'react-router-dom'
import axios from 'axios'

const StudentTable = () => {
  // Create a State Var
  const [student, setStudent] = useState([])

  //To Display the new record so we used the useEffect hooks
  useEffect(() =>{
    axios.get('http://localhost:8080')
    .then(result => setStudent(result.data))
    .catch(error => console.log(error))
  }, [])

  //Create Delete function 
  const handleDelete = (id) =>{
    axios.delete('http://localhost:8080/deleteStudent/'+id)
    .then(res => {console.log(res)
      window.location.reload()
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="d-flex vh-100  bg-success justify-content-center align-items-center" >
      <div className="w-70 bg-white rounded p-3" id="Box">
         <h4 className="text-center" id="heading">STUDENT MANAGEMENT SYSTEM</h4>
         {/* Link our route */}
        <Link to="/create" className="btn btn-success" id="btn">ADD STUDENTS +</Link>
        {/* After that we will create a table */}
        <table className="table"> 
          <thread className="head"> 
            <tr> 
              <th>NAME</th>
              <th>EMAIL</th>
              <th>AGE</th>
              <th>BRANCH</th>
              <th>ACTION</th>
            </tr>
          </thread>
            
          <tbody> 
            {
              student.map((student) =>{
                 return <tr> 
                  <td>{student.NAME}</td>
                  <td>{student.EMAIL}</td>
                  <td>{student.AGE}</td>
                  <td>{student.BRANCH}</td>
                  <td>
                    <Link to={`/update/${student._id}`} className="btn btn-success" id="btn">EDIT</Link>
                    <button className="btn btn-danger"  id="btn" onClick={(e) => handleDelete(student._id)}>DELETE</button>
                    </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StudentTable