import React, { Component } from 'react';
import Reusablecompo from './reusablecompo';

class component extends Component {
    render() {
        return (
            <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-3">
                        <Reusablecompo imgSrc='img/iphone.jpg' title="Apple" oldprice="90000" newprice="70000"/>
                    </div>
                
                    <div className="col-3">
                        <Reusablecompo imgSrc='img/mi.jpg' title="MI" oldprice="25000" newprice="20000"/>
                    </div>

                    <div className="col-3">
                        <Reusablecompo imgSrc='img/oneplus.jpg' title="oneplus" oldprice="36000" newprice="30000"/>
                    </div>

                    <div className="col-3">
                        <Reusablecompo imgSrc='img/vivo.jpg' title="vivo" oldprice="20000" newprice="10000"/>
                    </div>
                </div>
            </div>
            </>
            );
    }
}

export default component;