import React from 'react';
import {useParams} from 'react-router-dom';

const Profile = () => {

    // const params = useParams<'id'|'x'>()
    const params = useParams<'*'>()

    const some = params['*']
    console.log(some)

    return (
        <div>
            Profile from component
        </div>
    );
};

export default Profile;