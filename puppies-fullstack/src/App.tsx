import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import FixedBottomNavigation from './components/FixedBottomNavigation';
import TopNav from './components/TopNav';
import Home from './components/Home';

const App = () => {
  const [data, setData] = useState();
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

  if (data === undefined) return <h1>Loading Main Page...</h1>;

  if (error) return <h1>Please look at this error: {error}</h1>;

  return (
    <div className="app">
      <header className="app-header">
        <TopNav />
        <Routes>
          <Route path='/' element={<Home puppies={data} />} />
          {/* <Route path='/' element={<Favorites />} /> */}
        </Routes>
        {/* <Puppies puppies={data}/> */}
        <FixedBottomNavigation />
      </header>
    </div>
  );
};

export default App;
