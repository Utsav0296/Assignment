import React, { Component } from 'react';
import PropTypes from 'prop-types';

class lifecycle extends Component {
    constructor(props) {
        super(props);
        console.log("constructor called");
        this.state={counter:0}

    }

    // componentWillMount() {
    //         console.log("componentWillMount called");
    // }

    componentDidMount() {
           setTimeout(() => {
            console.log("componentDidMount called");
           }, 3000);
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log("componentWillReceiveProps called");
    // }

    shouldComponentUpdate(nextProps, nextState) {
            console.log("shouldComponentUpdate called");
            console.log("nextProps called");
            console.log("nextState called",nextState);
            return true;
    }

    // componentWillUpdate(nextProps, nextState) {
    //         console.log("componentWillUpdate called");
    // }

    componentDidUpdate(prevProps, prevState) {
            console.log("componentDidUpdate called");
            console.log("prevProps called");
            console.log("prevState called",prevState);
    }

    componentWillUnmount() {
            console.log("componentWillUnmount called");
    }
    BtnClick=()=>{
        console.log("btn called");
        this.setState({
            counter:this.state.counter+1
        })
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col">
                            <h1>{this.state.counter}</h1>
                            <button className='btn btn-primary' onClick={this.BtnClick}>Clickme</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}



export default lifecycle;