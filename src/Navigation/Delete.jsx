import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Delete = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  let [state, setState] = useState({
    trainer: "",
    subject: ""
  });

  let { trainer, subject } = state;

  const handleChanges = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data } = await axios.get(`http://localhost:5000/course/${id}`);
        setState(data);
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };
    fetchData();
  }, [id]);

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      let payload = { ...state };
      await axios.delete(`http://localhost:5000/course/${id}`, payload);
      navigate("/display");
    } catch (err) {
      console.error("Error updating data", err);
    }
  };

  return (
    <div>
      <div className='main-div'>
        <form onSubmit={formSubmit} className='trainer-form'>
          <fieldset>
            <legend>REGISTRATION FORM</legend>
            <table className='trainer-table'>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="trainer">TRAINER NAME</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="trainer"
                      id="trainer"
                      value={trainer}
                      onChange={handleChanges}
                      required
                    />
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
                      value={subject}
                      onChange={handleChanges}
                      required
                    />
                  </td>
                </tr>
                <tr className='btn-div'>
                  <td colSpan="2" style={{ textAlign: 'center' }}>
                    <button className='btn' type="submit" disabled={!trainer || !subject}>DELETE</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Delete;