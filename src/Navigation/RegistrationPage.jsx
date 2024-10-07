import axios from 'axios';
import React, { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationPage = () => {

  let navigate = useNavigation()

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    num: '',
    degree: '',
    stream: '',
    college: '',
    cgpa: '',
    course: ''
  });

  let {fullname,email,num,degree,stream,college,cgpa,course} =formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
   try{

    // let payload  ={...formData}

    // let {data} = await axios.post('http://localhost:5000/course',payload)
    console.log('Form Data:', formData);

    toast.success('Registration Successful!');

    setFormData({formDate});

   }
   catch(err){
    console.log(err);
    
   }
    
  };

  return (
    <div className='main-div'>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>REGISTRATION FORM</legend>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="fullname">FULL NAME</label>
                </td>
                <td>
                  <input 
                    type="text" 
                    name="fullname" 
                    id="fullname" 
                    value={formData.fullname} 
                    onChange={handleChange} 
                    required 
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="email">E-MAIL</label>
                </td>
                <td>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="num">PHONE NUMBER</label>
                </td>
                <td>
                  <input 
                    type="tel" 
                    name="num" 
                    id="num" 
                    value={formData.num} 
                    onChange={handleChange} 
                    required 
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="degree">DEGREE</label>
                </td>
                <td>
                  <input 
                    type="text" 
                    name="degree" 
                    id="degree" 
                    value={formData.degree} 
                    onChange={handleChange} 
                    required 
                  />
                </td>
              </tr>   
              <tr>
                <td>
                  <label htmlFor="stream">STREAM</label>
                </td>
                <td>
                  <input 
                    type="text" 
                    name="stream" 
                    id="stream" 
                    value={formData.stream} 
                    onChange={handleChange} 
                    required 
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="college">COLLEGE</label>
                </td>
                <td>
                  <input 
                    type="text" 
                    name="college" 
                    id="college" 
                    value={formData.college} 
                    onChange={handleChange} 
                    required 
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="cgpa">CGPA</label>
                </td>
                <td>
                  <input 
                    type="number" 
                    name="cgpa" 
                    id="cgpa" 
                    value={formData.cgpa} 
                    onChange={handleChange} 
                    required 
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="course">COURSE</label>
                </td>
                <td>
                  <select 
                    name="course" 
                    id="course" 
                    value={formData.course} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="">-select-</option>
                    <option value="DEVOPS">DEVOPS</option>
                    <option value="JAVA FULL STACK">JAVA FULL STACK</option>
                    <option value="MERN STACK">MERN STACK</option>
                    <option value="PYTHON FULL STACK">PYTHON FULL STACK</option>
                  </select>
                </td>
              </tr>
              <tr className='btn-div'>
                <td colSpan="2" style={{ textAlign: 'center' }}>
                  <button className='btn' type="submit" disabled={!formData.fullname && !formData.email ? true : false}>REGISTER</button>
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </form>
    </div>
  );
};

export default RegistrationPage;