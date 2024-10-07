import React, {useState , useEffect} from 'react'
import Display from './Display'
import axios from 'axios'
import Spinner from './Spinner';

const FetchDetails = () => {

    let [state,setState]=useState(null);

    let fetchData =async()=>{
        let data =await axios.get("http://localhost:5000/course");
        setState(data.data)
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>

    <h1 className='head'>DETAILS OF TRAINER</h1>
    <div>
        {
            state === null ? (<Spinner></Spinner>): state.map((data)=>{return <Display key={data.id} {...data}></Display>})
        }
    </div>
    </div>
  )
}

export default FetchDetails