import React, { useRef } from 'react';

function Ref() {

    const inp = useRef(null);
    console.log(inp);

    const btnClick=()=>{
        inp.current.focus();
        console.log(inp.current.value);
        if(inp.current.value=="")
        {
            alert("please enter data!");
        }
    }
    return (
        <>
        <div className="container">
            <div className="row mt-5">
                <div className="col-3">
                    <input type="text" className='form-control' ref={inp} />
                    <button className='btn btn-primary mt-2' onClick={btnClick}>click</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Ref;