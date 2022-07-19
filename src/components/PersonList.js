import React from 'react';
import DisplayFilter from './DisplayFilter';

function PersonList(props) {
  const { persons, handlerClick } = props;

  if (persons.length === 0)
    return <h1>Please wait some time for load data ...</h1>;
  return <DisplayFilter persons={persons} handlerClick={handlerClick} />;
}

export default PersonList;
