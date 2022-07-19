import React from 'react';
import { useState, useEffect} from 'react';
import DisplayFilter from './DisplayFilter';
import Api from '../api/axios'
import MethodsRequests from '../api/MethodsRequests';

function PersonList(props) {
  const {persons, handlerClick} = props
  // const [persons, setPersons] = useState([]);

  // const onDelete = (record) => {
  //   const NewData = persons.filter((item) => item.id !== record.id);
  //   setPersons(NewData);
  // };

  if (persons.length === 0)
    return <h1>Please wait some time for load data ...</h1>;
  return <DisplayFilter persons={persons} handlerClick={handlerClick}   />
}

export default PersonList;
