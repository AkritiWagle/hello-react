import React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

interface Customer {
  id: number;
  name: string;
  age: number;
  phone: string;
  address: string;
}

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
