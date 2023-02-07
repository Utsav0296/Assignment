import React, { useEffect } from 'react';
import {GetApiAction,DeleteApiAction} from '../action/action';
import {useDispatch,useSelector} from 'react-redux';

function Home() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GetApiAction());
    },[dispatch]);
    const responsedata = useSelector((state)=>state.reducer.details);
    const isDELETEdata = useSelector((state)=>state.reducer.isDELETEdata);
    console.log(responsedata);

   

    if(isDELETEdata)
    {
        
        window.location.reload();
        return false;
    }
   
    // console.log();
    const result = responsedata?responsedata.map((data,index)=>{
        return(
            <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.country}</td>
            <th><button className='btn btn-success' onClick={()=>{dispatch(DeleteApiAction(data.id))}}>Delete</button></th>
        </tr>
        );
    }):null;


    return (
       <>
        <div className="container text-center">
            <h1 className='text-danger'>Welcome to redux CRUD Application</h1>
            <table className="table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Counrty</td>
                    </tr>
                </thead>
                <tbody>
                        {result}
                </tbody>
            </table>
        </div>
       </>
    );
}

export default Home;