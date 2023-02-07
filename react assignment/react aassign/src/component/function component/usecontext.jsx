import React, { useContext } from 'react';


const themes={
    light:{
        fg:'aqua',
        bg:'yellow'
    },
    dark:{
        fg:'blue',
        bg:'red'
    }
}

const Mycontext = React.createContext(themes.dark);
function Usecontext(){
    const mytheme = useContext(Mycontext);
    return (
     <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <button style={{background:mytheme.bg,color:mytheme.fg}}>i am styled by theme</button>
                    </div>
                </div>
            </div>
     </>
    );
}

export default Usecontext;