import React from 'react';
import Child from './Child';

const Parent = () => {
  const data = [
    {
      name: "SAiFi",
      cast: "SOOMRO",
      age: 26,
      color: "Black",
      dish: "Biryani",
    },
    {
      name: "Ali",
      cast: "Khan",
      age: 30,
      color: "Blue",
      dish: "Pizza",
    },
    {
      name: "Aisha",
      cast: "Shaikh",
      age: 24,
      color: "Pink",
      dish: "Pasta",
    },
  ];

  return (
    <div>
      {data.map((person, index) => (
        <Child
          key={index} 
          name={person.name}
          Cast={person.cast}
          Age={person.age}
          Color={person.color}
          Dish={person.dish}
        />
      ))}
    </div>
  );
};

export default Parent;

