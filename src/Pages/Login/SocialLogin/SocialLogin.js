import React from 'react';
import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import github from '../../../images/social/github.png'
import Loading from '../../Shared/Loading/Loading';
const SocialLogin = () => {
    const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);

    // User Navigate 
    const navigate = useNavigate();
    if (user) {
        navigate('/home');
    }

    // Loading  
    if (loading) {
        return <Loading></Loading>
    }

    // Error messege 
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-light w-50 d-block mx-auto'>
                    <img style={{ width: '40px' }} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;