import React, { useState } from 'react';
import DisplayFilter from './DisplayFilter';
import { Button, Form, Input,  Select} from 'antd';

function FilterInput(props) {
  const {handlerSearch, dropdown, selectedValue, onChangeDropDown} = props;
  const [text, setText] = useState('');
  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 4,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handlerSearch} 
        autoComplete="off"
      >
        <Form.Item label="Filter name from employee"  name="category">
          <Select onChange={onChangeDropDown} >
            {dropdown.map((item, index) => <Select.Option  name={item} value={item} key={index}>{item}</Select.Option>)}
          </Select>
        </Form.Item>
        <Form.Item
          label="Employee name / surname"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input
            type="text"
           onChange={(e) => setText(e.target.value)}
            name="InputFilter"
          />
        </Form.Item>

        <Form.Item label="Button">
          <Button type="primary"   htmlType="submit">
            Add Fiter
          </Button>
        </Form.Item>
      </Form>
      {/* <DisplayFilter persons={filterPerson} /> */}
    </div>
  );
}

export default FilterInput;
