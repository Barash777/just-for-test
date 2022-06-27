import React, {useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';

const Profile = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    console.log(searchParams.get('name'))
    console.log(searchParams.get('age'))
    console.log(Object.fromEntries(searchParams))

    useEffect(() => {
        console.log('research')
    }, [searchParams])


    return (
        <div>
            Profile from component
            <button onClick={() => {
                setSearchParams({...Object.fromEntries(searchParams), age: '33'})
            }}
            >
                add age
            </button>
        </div>
    );
};

export default Profile;