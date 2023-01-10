import React from 'react';
import './Puppies.css';

type DataType = {
  puppies: {
    id: string,
    name: string,
    breed: string,
    dob: string,
  }[]
};

const Puppies = ({ puppies } : DataType) => (
        <div>
            {puppies.map(puppy => (
              <div className='puppy-details' key={puppy.id}>
                <h2>Name: {puppy.name}</h2>
                <h2>Breed: {puppy.breed}</h2>
                <h2>DOB: {puppy.dob}</h2>
              </div>
            ))}
        </div>
);

export default Puppies;
