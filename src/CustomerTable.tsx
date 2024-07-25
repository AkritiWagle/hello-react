import React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Customer } from './types';

interface CustomerTableProps {
  customers: Customer[];
  onRowClick: (record: Customer) => void;
}

const CustomerTable: React.FC<CustomerTableProps> = ({ customers, onRowClick }) => {
  const columns: ColumnsType<Customer> = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Phone', dataIndex: 'phone', key: 'phone' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    { title: 'Following', dataIndex: 'isFollowing', key: 'isFollowing', render: (isFollowing: boolean) => (isFollowing ? 'Yes' : 'No') },
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
