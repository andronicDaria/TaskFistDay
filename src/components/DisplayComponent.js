import React from 'react';
import FilterInput from './FilterInput';
import PersonAdd from './PersonAdd';
import PersonList from './PersonList';

const DisplayComponent = () => {
  return (
    <div>
      <PersonAdd />
      <PersonList />
      <FilterInput />
    </div>
  );
};

export default DisplayComponent;
