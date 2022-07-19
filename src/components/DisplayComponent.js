import React from 'react';
import MethodsRequests from '../api/MethodsRequests';
import FilterInput from './FilterInput';
import PersonAdd from './PersonAdd';
import PersonList from './PersonList';

const DisplayComponent = () => {
  return (
    <MethodsRequests>
      <PersonAdd />
      {/* <PersonList /> */}
      {/* <FilterInput/> */}
    </MethodsRequests>
  );
};

export default DisplayComponent;
