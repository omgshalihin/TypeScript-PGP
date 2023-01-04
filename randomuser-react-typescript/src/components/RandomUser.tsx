import React from 'react';

type UserData = {
  name: string,
  age: number,
  address: string
};

const RandomUser = ({ name, age, address } : UserData) => (
    <div>
      <h1>Hi, my name is {name}.</h1>
      <h1>I am {age} years old.</h1>
      <h1>I live in {address}.</h1>
    </div>
);

export { RandomUser };
