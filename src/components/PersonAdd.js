import React from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { Button, Form, Input } from 'antd';

class PersonAdd extends React.Component {
  handlerSubmit = (values) => {
    values.id = nanoid();
    const data = values;
    axios.post(`https://retoolapi.dev/geeOvB/data`, { data }).then((res) => {
      console.log('Data show in post - ', res.data.data);
    });
  };

  render() {
    return (
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
        onFinish={this.handlerSubmit}
        autoComplete="off"
      >
        <Form.Item label="Add More"></Form.Item>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Job"
          name="job"
          rules={[
            {
              required: true,
              message: 'Please input your job!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="City"
          name="city"
          rules={[
            {
              required: true,
              message: 'Please input your city!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: 'Please input your phone!',
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Button">
          <Button type="primary" htmlType="submit">
            Add More
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default PersonAdd;
