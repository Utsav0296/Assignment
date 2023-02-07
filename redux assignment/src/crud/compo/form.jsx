import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {PostApiAction} from '../action/action'
function Form() {

    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [country,setcountry] = useState("");
    const dispatch = useDispatch();

    const namehandler=(e)=>{
        setname(e.target.value);
    }
    const emailhandler=(e)=>{
        setemail(e.target.value);
    }
    const countryhandler=(e)=>{
        setcountry(e.target.value);
    }

    const clickhandler=(e)=>{
        e.preventDefault();
        console.log("btn called");
        const Finaldata = {
            name:name,
            email:email,
            country:country,
        };

        dispatch(PostApiAction(Finaldata));
    };


    return (
       <>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <form method='post'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id='name' placeholder='Enter Name' name='name' className='form-control' onChange={(e)=>namehandler(e)}/>
                        <label htmlFor="name" className='mt-3'>Email:</label>
                        <input type="Email" id='email' placeholder='Enter Email' name='email' className='form-control' onChange={(e)=>emailhandler(e)} />
                        <label htmlFor="name" className='mt-3'>Country:</label>
                        <input type="text" id='country' placeholder='Enter country' name='country' className='form-control' onChange={(e)=>countryhandler(e)}/>
                        <button type='sunmit' className='btn btn-primary mt-3' onClick={(e)=>clickhandler(e)}>Submit</button>

                    </form>
                </div>
            </div>
        </div>
       </>
    );
}

export default Form;