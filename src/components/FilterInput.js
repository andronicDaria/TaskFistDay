import React, { useState } from 'react';
import axios from 'axios';
import DisplayFilter from './DisplayFilter';
import { Button, Form, Input } from 'antd';

function FilterInput() {
  const [text, setText] = useState('');
  const [filterPerson, setPersons] = useState([]);

  const handlerGet = () => {
    axios.get(`https://retoolapi.dev/geeOvB/data?Name=${text}`).then((res) => {
      if (res.status === 200) {
        setPersons(res.data);
      } else {
        return Promise.reject({ twtw: 123 });
      }
    });
  };
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
        autoComplete="off"
      >
        <Form.Item label="Filter name from employee"></Form.Item>
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
          <Button type="primary" onClick={handlerGet}>
            Add Fiter
          </Button>
        </Form.Item>
      </Form>
      <DisplayFilter persons={filterPerson} />
    </div>
  );
}

export default FilterInput;
