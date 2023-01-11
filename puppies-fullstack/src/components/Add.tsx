import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Add() {
  const navigate = useNavigate();
  const [newPuppy, setNewPuppy] = useState({
    breed: '',
    name: '',
    dob: '',
  });

  const addPuppy = (newPup: { breed: string; name: string; dob: string; }) => {
    fetch('http://localhost:8080/api/puppies', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(newPup),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => {
      navigate('/');
      setTimeout(() => {
        window.location.reload();
      }, 200);
    });
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setNewPuppy({ ...newPuppy, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    addPuppy(newPuppy);
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-basic"
        label="Name of Puppy"
        variant="outlined"
        value={newPuppy.name}
        name="name"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="Breed"
        variant="outlined"
        value={newPuppy.breed}
        name="breed"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="yyyy-mm-dd"
        variant="outlined"
        value={newPuppy.dob}
        name="dob"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </Box>
  );
}
