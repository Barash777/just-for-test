import React, {useEffect} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

const Profile = () => {

    const navigate = useNavigate()

    /*useEffect(() => {
        if (true) {
            navigate('/login')
        }
    }, [])*/



    return (
        <div>
            Profile from component
            <button onClick={() => {navigate(-1)}}>logout</button>
        </div>

    /*<div>
        {true ? (
            <Navigate to={'/login'} />
        ) : (
            <>
                Profile from component
                <button onClick={() => {navigate('/login')}}>logout</button>
            </>
        )}
    </div>*/
    );
};

export default Profile;