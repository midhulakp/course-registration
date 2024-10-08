import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Deletestudent = () => {
    const navigate = useNavigate();
  let { id } = useParams();

  let [state, setState] = useState({
    fullname: '',
    email: '',
    num: '',
    degree: '',
    stream: '',
    college: '',
    cgpa: '',
    course: ''
  });

  let { fullname,email,num,degree,stream,college,cgpa,course } = state;

  const handleChange = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data } = await axios.get(`http://localhost:5001/detail/${id}`);
        setState(data);
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let payload = { ...state };
      await axios.delete(`http://localhost:5001/detail/${id}`, payload);
      navigate("/display");
    } catch (err) {
      console.error("Error updating data", err);
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
                    value={state.fullname} 
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
                    value={state.email} 
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
                    value={state.num} 
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
                    value={state.degree} 
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
                    value={state.stream} 
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
                    value={state.college} 
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
                    value={state.cgpa} 
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
                    value={state.course} 
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
                  <button className='btn' type="submit" disabled={!state.fullname && !state.email ? true : false}>DELETE</button>
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </form>
    </div>
  );
};

export default Deletestudent