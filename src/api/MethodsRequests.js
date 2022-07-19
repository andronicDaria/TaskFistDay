import React from 'react'
// import axios from '../api/axios';
// import Api from '../api/axios'
import FilterInput from '../components/FilterInput';
import PersonAdd from '../components/PersonAdd';
import PersonList from '../components/PersonList';
import { getData, getDataFilter } from '../api/axios';

export default class MethodsRequests extends React.Component {        
        state = {
          persons: [],
          selectedValue: null,
          valueText: null,
          dropdownItems: []
        };
    
      componentDidMount() {
        getData.then(res =>  {
            const persons = res.data; 
            const dropdownItems = Object.keys(persons[0])
            this.setState({ persons: persons, dropdownItems: dropdownItems})
        })
     
      }

    onDelete = (record) => {    
        const persons = this.state.persons.filter((item) => item.id !== record.id);
        this.setState({persons: persons});
    };
    
    onSearch = (props) => {  
        const {category, name} = props;

        getDataFilter(category, name ).then(res =>  {
         const data = res.data;
         this.setState({persons: data});            
        });
    };
    handleChangeFilter = (value) => {
        this.setState({ selectedValue: value })
     }

    //   getSimple() {
        //     const response =  Api.get();
        //     const json =  response.json();
        //     this.setState({ data: json });
        //   }
        
        //  getWithText() {
        //     const response =   Api.get();
        //     const json =  response.json();
        //     this.setState({ data: json });
        //   }
        //  post() {
        //     const response =   Api.post();
        //     const json =  response.json();
        //     this.setState({ data: json });
    //   }

  render() {
    return (
      <div>      
          <PersonAdd />
          <FilterInput handlerSearch={this.onSearch} onChangeDropDown={this.handleChangeFilter} selectedValue={this.state.selectedValue} dropdown={this.state.dropdownItems}/>
          <PersonList persons={this.state.persons} handlerClick={this.onDelete}/>
      </div>
    )
  }
}
