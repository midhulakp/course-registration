import React from 'react'
import { Link } from 'react-router-dom';

const Studentdata = ({fullname,email,num,degree,stream,college,cgpa,course,id}) => {
   
  
  return (
    <div className='std-div'>

      <div className='std-box'>
        <div className='std'>
            <h2>Fullname : {fullname}</h2>
            <h2>Email :{email}</h2>
            <h2>Phone number :{num}</h2>
            <h2>Degree:{degree}</h2>
            <h2>Stream :{stream}</h2>
            <h2>College :{college}</h2>
            <h2>cgpa :{cgpa}</h2>
            <h2>Course :{course}</h2>
        </div>
        <div className='function'>
              <Link to={`/editstd/${id}`} className='edit'>Edit</Link>
              <Link to={`/deletestd/${id}`} className='edit'>Delete</Link>
        </div>
      </div>
      
    </div>
  

  )
}
export default Studentdata