import React, { Component } from 'react';
import PropTypes from 'prop-types';

class incriment_decriment extends Component {
    constructor(props) {
        super(props);
        this.state={counter:0}
    }

   

    componentDidMount() {

    }

    

    componentWillUnmount() {

    }
    BtnCliclk=()=>{
        console.log("BtnCliclk called");
        this.setState({
            counter:this.state.counter+1
        })
    }
    BtnDec=()=>{
        console.log("BtnDec called");
        this.setState({
            counter:this.state.counter-1
        })
    }
    BtnRes=()=>{
        console.log("BtnRes called");
        this.setState({
            counter:this.state.counter=0
        })
    }

    render() {
        return (
          <>
                 <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <h1 className='ms-5'>{this.state.counter}</h1>
                            <div className="btn btn-primary" onClick={this.BtnCliclk}>Increament</div>
                            <div className="btn btn-primary ms-5" onClick={this.BtnDec}>Decrement</div>
                            <br />
                            <div className="btn btn-primary mt-2" onClick={this.BtnRes}>Reset</div>

                        </div>
                    </div>
                </div>
          </>
        );
    }
}



export default incriment_decriment;