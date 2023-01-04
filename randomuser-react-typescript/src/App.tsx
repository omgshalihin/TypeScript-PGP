import React, { useEffect, useState } from 'react';
import './App.css';
import { RandomUser } from './components/RandomUser';

function App() {
  const [user, setUser] = useState({
    name: ' ',
    age: 0,
    address: '',
  });

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      const firstUser = data.results[0];

      setUser({
        name: firstUser.name.first,
        age: firstUser.dob.age,
        address: firstUser.location.street.name,
      });
    };

    getData();
  }, []);

  const handleNameChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setUser({ ...user, name: value });
  };

  return (
    <div className='container'>
      <h1><u>User Details</u></h1>
      <RandomUser name={user.name} age={user.age} address={user.address} />
      <input type="text" value={user.name} onChange={handleNameChange} />
    </div>
  );
}

export default App;
