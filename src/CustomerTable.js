// src/CustomerTable.js
import React from 'react';
import { Table } from 'antd';

const CustomerTable = ({ customers, onRowClick }) => {
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Phone', dataIndex: 'phone', key: 'phone' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
  ];

  return (
    <Table
      dataSource={customers}
      columns={columns}
      onRow={(record) => ({
        onClick: () => onRowClick(record),
      })}
      rowKey="id"
    />
  );
};

export default CustomerTable;
