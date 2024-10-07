import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const TrainerDetails = () => {

       const navigate = useNavigate();

    let[state,setState]=useState({
        trainer:"",
        subject:""
    })

    let {trainer,subject}= state;

    const handleChanges =(e)=>{
        setState({
            ...state,[e.target.name]:e.target.value
        });
    };
    const formSubmit = async(e)=>{
        e.preventDefault();
        try{
            let payload ={...state}
            let{data}= await axios.post('http://localhost:5000/course',payload)
            console.log('Form Data:');
            setState({state})
            navigate("/display")
        }
        catch(err){
            console.log(err);
            
        }
    }
  return (
    <div>
        <div className='main-div'>
      <form onSubmit={formSubmit} className='trainer-form'>
        <fieldset>
          <legend>REGISTRATION FORM</legend>
          <table  className='trainer-table'>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="trainer">TRAINER NAME</label>
                </td>
                <td>
                  <input type="text" name="trainer"  id="trainer" value={state.trainer} onChange={handleChanges} required   />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="subject">SUBJECT</label>
                </td>
                <td>
                  <input 
                    type="text" 
                    name="subject" 
                    id="subject" 
                    value={state.subject} 
                    onChange={handleChanges} 
                    required 
                  />
                </td>
              </tr>
              <tr className='btn-div'>
                <td colSpan="2" style={{ textAlign: 'center' }}>
                  <button className='btn' type="submit" disabled={!state.trainer && !state.subject ? true : false}>REGISTER</button>
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </form>
    </div>
    </div>
  )
}

export default TrainerDetails