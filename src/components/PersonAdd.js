import React from 'react';
import Api from '../api/axios'
import { nanoid } from 'nanoid';
import { Button, Form, Input, message } from 'antd';
import { postDataAdd } from '../api/axios';


class PersonAdd extends React.Component {
  handlerSubmit = (values) => {
    
    values.id = nanoid();
    const data = values;

    postDataAdd(data).then((res) => {
        console.log('Data show in post - ', res.data.data);
        const employee =  res.data.data
        message.success(`Succesefuly add new employee! Name: ${employee.name}, Email: ${employee.email},  Job ${employee.job}, City ${employee.city}. `)
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
