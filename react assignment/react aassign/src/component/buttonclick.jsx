import React, { Component } from 'react';
import { Navigate,useNavigate} from 'react-router-dom';

class Mybtn extends Component {
    render() {
        return (
            <>
                <button onClick={()=>{
                    console.log("btncalled");
                    console.log(this.props);
                    // Navigate('/whatever');
                }}>clickme</button>
            </>
        );
    }
}
function Buttonclick()
{
    let navigate = useNavigate();
    return <>
        <Mybtn  navigatedata={navigate}/>
    </>
}
export default Buttonclick;