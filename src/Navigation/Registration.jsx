import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Studentdata from './Studentdata';
import Spinner from './Spinner';

const Registration = () => {
    let [state,setState]=useState(null);

    let fetchData =async()=>{
        let data =await axios.get("http://localhost:5001/detail");
        setState(data.data)
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>

        <h1 className='head'>DETAILS OF STUDENT</h1>
        <div>
            {
                state === null ? (<Spinner></Spinner>): state.map((data)=>{return <Studentdata key={data.id} {...data}></Studentdata>})
            }
        </div>
    </div>
  )
}

export default Registration