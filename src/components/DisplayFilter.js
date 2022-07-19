import React from 'react';
import { Table, Space, Button } from 'antd';
import { PropTypes } from 'prop-types';

function DisplayFilter(props) {
  const { persons, handlerClick } = props;

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Job',
      dataIndex: 'Job',
      key: 'Job',
    },
    {
      title: 'City',
      dataIndex: 'City',
      key: 'City',
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',
    },
    {
      title: 'DateCreated',
      dataIndex: 'DateCreated',
      key: 'DateCreated',
    },
    {
      title: 'Phone Number',
      dataIndex: 'Phone Number',
      key: 'Phone Number',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button
            danger
            className={`Delete`}
            onClick={() => {
              handlerClick(record);
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  // if (persons.length === 0)
  //   return <Table dataSource={persons} columns={columns} rowKey="id" />;
  return <Table dataSource={persons} columns={columns} rowKey="id" />;
}

DisplayFilter.propTypes = {
  handlerClick: PropTypes.func.isRequired,

  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      City: PropTypes.string.isRequired,
      Email: PropTypes.string.isRequired,
      Job: PropTypes.string.isRequired,
      Name: PropTypes.string.isRequired,
      'Phone Number': PropTypes.string,
    })
  ),
};
DisplayFilter.defaultProps = {
  handlerClick() {},
};

export default DisplayFilter;
