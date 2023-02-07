import React,{useEffect,useState,useLayoutEffect} from 'react';

function Myfunc() {
    const[vara,setvara] = useState(0);
    const[uname,setuname] = useState('React');

    useLayoutEffect(()=>{
        setTimeout(() =>{
        console.log("use layout effect");
     },2000);


    });

    useEffect(()=> {
       
        console.log("useeffect called");
        return chngdata
    }, [uname])

    function chngdata(){
        console.log("function called");
        setuname('Reactjs')
    }

    const [count,setcount]=useState(0);
    return (
       <>
       <div className="container">
        <div className="row">
            <div className="col">
                {vara}
                <br />
                <button onClick={()=>{setvara(50)}}>click</button>
                <br />
                {uname}
                <button onClick={chngdata}>me</button>
                <br />
                {count}
                <br />
                <button onClick={()=>{setcount(count+1)}}>count</button>
            </div>
        </div>
       </div>
       </>
    );
}

export default Myfunc