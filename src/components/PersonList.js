import React from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { useState, useEffect } from 'react';
import DisplayFilter from './DisplayFilter';

function PersonList() {
  const [persons, setPersons] = useState([]);

  const onDelete = (record) => {
    const NewData = persons.filter((item) => item.id !== record.id);
    setPersons(NewData);
  };

  useEffect(() => {
    axios.get(`https://retoolapi.dev/geeOvB/data`).then((res) => {
      if (res.status === 200) {
        setPersons(res.data);
      } else {
        return Promise.reject({ twtw: 123 });
      }
    });
  }, []);

  if (persons.length === 0)
    return <h1>Please wait some time for load data ...</h1>;
  return <DisplayFilter persons={persons} handlerClick={onDelete} />;
}

export default PersonList;
