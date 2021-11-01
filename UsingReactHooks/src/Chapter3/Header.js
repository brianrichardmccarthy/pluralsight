import React from "react";
import SignMeUp from "./SignMeUp";

const Header = () => {
    const signUpCallback = (email) => {
        return console.log(`sign up email called with email ${email}`)
    };

    return (
        <div className='jumbotron jumbotronHeight'>
            <div className='row'>
                <div className='col-12 col-sm-4 text-lg-center'>
                    <h6 className='text-uppercase'>01/01/2021</h6>
                    <h6 className='text-uppercase'>San Jose, California</h6>
                </div>
                <div className='col-12 col-sm-8 text-lg-center'>
                    <div>
                        <img src='/static/SVCClogo.png' />
                    </div>
                    <h2>Silicon Valley Code Camp</h2>
                    <div className='row col-12 text-lg-right'>
                        <SignMeUp signUpCallback={signUpCallback} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;