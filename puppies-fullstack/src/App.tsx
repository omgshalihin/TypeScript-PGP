import React, { useEffect, useState } from 'react';
import './App.css';

type DataType = {
  map(arg0: (puppy: any) => void): React.ReactNode;
  breed: string,
  name: string,
  dob: string
};

const App = () => {
  const [data, setData] = useState<DataType>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/puppies');
        const newData = await response.json();
        setData(newData);
      } catch (err : any) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  if (data === undefined) return <h1>Loading...</h1>;

  if (error) return <h1>Please look at this error: {error}</h1>;

  return (
    <div className="app">
      <header className="app-header">
      <h1>Puppies</h1>
      {data.map(puppy => (
          <div className='puppy-details' key={puppy.id}>
            <h2>Name: {puppy.name}</h2>
            <h2>Breed: {puppy.breed}</h2>
            <h2>DOB: {puppy.dob}</h2>
          </div>
      ))}
      </header>
    </div>
  );
};

export default App;
