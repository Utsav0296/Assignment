import React, { Component } from 'react';

class state extends Component {
    constructor(props){
        super(props);
        this.state={
            // author : " ",
            // book : " "
            hdress :" ",
            sangeet : ""
        }
    }
    // chngdata=()=>{
    //     this.setState({author:"Chetan patel",book:"whatever"});
    //     console.log("btn called");
    // }
    hd=()=>{
        this.setState({hdress:"kurta"});
    }
    sg=()=>{
        this.setState({sangeet:"western"});
    }
    render() {
        return (
          <>
          <div className="container">
            <div className="row mt-5">
                <div className="col">
                    {/* {this.state.author} */}
                    {/* <button onClick={this.chngdata}>clickme</button> */}
                    {/* {this.state.book} */}
                    {this.state.hdress}
                    <button onClick={this.hd}>haldi</button>
                    
                    <br /><br />
                    {this.state.sangeet}
                    <button onClick={this.sg}>sangeet</button>
                    
                </div>
            </div>
          </div>
          </>
        );
    }
}

export default state;