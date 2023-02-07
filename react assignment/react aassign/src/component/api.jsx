import React, { Component } from 'react';
import PropTypes from 'prop-types';

class API extends Component {
    constructor(props) {
        super(props);
        console.log("constructor called");
        this.state={
            userdata:'',
            data:'Loading.....',
            status:'pending'
        }
    }

    

    componentDidMount() {
            console.log("did mount callled");
            setTimeout(() => {
                fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json()).then((responsive)=>{
                    console.log(responsive);
                    this.setState({userdata:responsive,status:'completed'})
                }).catch((errorhandel)=>{
                    console.log(errorhandel);
                })
            }, 3000);
    }

            btnclick=()=>{
                this.setState({
                    data:'refresh',
                })
            }

 

    render() {
        console.log("render called");
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {this.state.status!='completed'?'Loading.....':"will be printing"}
                            {/* {this.state.data} */}
                            <button onClick={this.btnclick}>click</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

API.propTypes = {

};

export default API;