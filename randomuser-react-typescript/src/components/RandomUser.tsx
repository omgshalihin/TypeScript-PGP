import React, { useEffect, useState } from 'react';
import './RandomUser.css';

const RandomUser = () => {
  const [userData, setUserData] = useState({
    name: ' ',
    age: 0,
    address: '',
  });

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      const firstUser = data.results[0];

      setUserData({
        name: firstUser.name.first,
        age: firstUser.dob.age,
        address: firstUser.location.street.name,
      });
    };

    getData();
  }, []);

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setUserData({ ...userData, name: value });
  };

  return (
    <div>

      <div className='user--details__container'>
        <h2><u>User Details</u></h2>
        <h3>My name is {userData.name}.</h3>
        <h3>I am {userData.age} years old.</h3>
        <h3>I'm living at {userData.address}.</h3>
      </div>

      <form action="" className='form__container'>
        <h2>Not you? Change the name of {userData.name} here.</h2>
        <input type="text" value={userData.name} onChange={handleChange}/>
      </form>
    </div>
  );
};

export { RandomUser };
