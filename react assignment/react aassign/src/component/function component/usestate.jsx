import React from 'react';
import { useState } from 'react';

function Usestate() {
    const[username,setusername] = useState("SomeoneBhagat");
    const[vara,setvara]=useState(0);
    const[varb,setvarb]=useState(0);

    function chngData()
    {
        console.log("btn called");
        setvara(10);
        setvarb(20);
    }
    return (
      <>
        <div className="container">
            <div className="row">
                <div className="col">
                    {username}
                    <br />
                    <button onClick={()=>{setusername("Chetan Bhagat")}}>click me to change</button>
                    <br />
                    {vara+varb}
                    <br />
                    <button onClick={chngData}>change data</button>
                </div>
            </div>
        </div>
      </>
    );
}

export default Usestate;