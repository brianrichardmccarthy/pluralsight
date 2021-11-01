import React, {useState} from "react";

const SignMeUp = ({signupCallback}) => {
    const [email, setEmail] = useState('');

    return (
        <div className='container'>
            <div className='content'>
                <input
                    placeholder='Enter Email'
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value.trim());
                    }}
                />
                &nbsp;
                <button
                    className='btn'
                    type='submit'
                    disabled={!email.includes('@')}
                    onClick={() => {
                        signupCallback(email);
                        setEmail('');
                        alert('signup confirmed');
                    }}>
                        Get Updates
                </button>
            </div>
        </div>
    );
};

export default SignMeUp;