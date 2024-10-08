import React from 'react'
import { Link } from 'react-router-dom';

const Display = ({trainer,subject,id}) => {
   
  
  return (
    <div className='maindiv'>

      <div className='main-box'>
        <div className='display-box'>
            <h2>Name :{trainer}</h2>
            <h2>Subject: {subject}</h2>
        </div>
        <div className='fun'>
              <Link to={`/edit/${id}`} className='edit'>Edit</Link>
              <Link to={`/delete/${id}`} className='edit'>Delete</Link>
        </div>
      </div>
      
    </div>
  

  )
}

export default Display