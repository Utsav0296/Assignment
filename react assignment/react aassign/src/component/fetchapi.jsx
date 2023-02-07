import React, { Component } from 'react';
import PropTypes from 'prop-types';

class fetchapi extends Component {
    constructor(props) {
        super(props);
        console.log("constructorcalled");
        this.state={
            fetchdata:'',
            status:'pending....'
        }

    }

   

    componentDidMount() {
            setTimeout(() => {
                console.log('componentdidmount');
                fetch('https://jsonplaceholder.typicode.com/comments').then((re)=>re.json())
                .then((resp)=>{
                    console.log(resp);
                    this.setState({fetchdata:resp})
                    this.setState({status:'success'})
                }).catch((errorhandel)=>{
                    console.log(errorhandel);
                })
            }, 3000);
    }

   

    render() {
        return (
          <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {this.state.status}
                        {this.state.status=='success'?<div>{JSON.stringify(this.state.fetchdata)}</div>:'No data found'}
                    </div>
                </div>
            </div>
          </>
        );
    }
}

fetchapi.propTypes = {

};

export default fetchapi;