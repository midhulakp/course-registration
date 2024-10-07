import React from 'react'
import { Link } from 'react-router-dom'

const CourseDetailsPage = () => {
  return (
    <div>
        <div className='course'>
        <div className='courses'>
            <div className='box1'>
                <h1>JAVA FULL STACK</h1>
            </div>
            <div className="box2">
                <p>CORE JAVA</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
                <p>SQL</p>
                <p>JDBC</p>
                <p>HYBERNET</p>
                <p>SPRING BOOT</p>

            </div>


        </div>
        <div className='courses'>
            <div className='box1'>
                <h1>MERN STACK</h1>
            </div>
            <div className="box2">
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
                <p>MONGO DB</p>
                <p>EXPRESS JS</p>
                <p>REACT JS</p>
                <p>NODE JS</p>
                <p>CORE JAVA</p>
                <p>SQL</p>

            </div>


        </div>
        <div className='courses'>
            <div className='box1'>
                <h1>DEVOPS</h1>
            </div>
            <div className="box2">
                <p>CORE JAVA</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
                <p>SQL</p>
                <p>LINUX</p>
                <p>JSON</p>
                <p>NETWORKING</p>
            </div>


        </div>
        </div>
        <div className='b1'>
        <Link to="/Registration" className='link'><button>REGISTER</button></Link>
            
        </div>

            

    </div>
  )
}

export default CourseDetailsPage