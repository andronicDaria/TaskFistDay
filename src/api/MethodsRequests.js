import React from 'react';
import FilterInput from '../components/FilterInput';
import PersonAdd from '../components/PersonAdd';
import PersonList from '../components/PersonList';
import { getData, getDataFilter } from '../api/axios';

export default class MethodsRequests extends React.Component {
  state = {
    persons: [],
    selectedValue: null,
    valueText: null,
    dropdownItems: [],
  };

  componentDidMount() {
    this.onGetdata();
  }

  onGetdata = () => {
    getData().then((res) => {
      const persons = res;
      const dropdownItems = Object.keys(persons[0]);
      this.setState({ persons: persons, dropdownItems: dropdownItems });
    });
  };

  onDelete = (record) => {
    const persons = this.state.persons.filter((item) => item.id !== record.id);
    this.setState({ persons: persons });
  };

  onSearch = (props) => {
    const { category, name } = props;

    getDataFilter(category, name).then((res) => {
      this.setState({ persons: res });
    });
  };

  render() {
    return (
      <div>
        <PersonAdd handlerGetData={this.onGetdata} />
        <FilterInput
          handlerSearch={this.onSearch}
          dropdown={this.state.dropdownItems}
        />
        <PersonList persons={this.state.persons} handlerClick={this.onDelete} />
      </div>
    );
  }
}
