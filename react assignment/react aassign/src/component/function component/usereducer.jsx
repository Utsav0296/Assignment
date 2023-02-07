import React from 'react';
import { useReducer } from 'react';


const InitialData = {count:0}
function reducer(state,action){
    switch (action.type) {
        case 'Increment':
            
            return {count:state.count+1}

        case 'Decrement' :

        return {count:state.count-1}
    
        default:
            throw new Error();
    }
}
function Usereducer() {
    const[state,dispatch] = useReducer(reducer,InitialData)
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <button className='btn btn-info text-white' onClick={()=>dispatch({type:'Decrement'})}>Decrement</button>
                        <h2>{state.count}</h2>
                        <button className='btn btn-success text-white' onClick={()=>dispatch({type:'Increment'})}>Increment</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Usereducer