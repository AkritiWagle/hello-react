import React, { useState } from 'react';
import { Button } from 'antd';
import CustomerTable from './CustomerTable';
import CustomerProfile from './CustomerProfile';
import { Customer } from './types';

const App: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([
    { id: 1, name: 'Akriti Wagle', age: 18, phone: '9867788888', address: 'newroad Pokhara', isFollowing: false },
    { id: 2, name: 'Prayas ram', age: 14, phone: '980000000', address: 'Kathmandu Pokhara', isFollowing: true },
  ]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleRowClick = (customer: Customer) => {
    setSelectedCustomer(customer);
    setIsModalVisible(true);
  };

  const handleAddCustomer = () => {
    setSelectedCustomer(null);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedCustomer(null);
  };

  const handleSaveCustomer = (customer: Customer) => {
    if (customer.id) {
      setCustomers(customers.map(c => (c.id === customer.id ? customer : c)));
    } else {
      customer.id = customers.length + 1;
      setCustomers([...customers, customer]);
    }
  };

  return (
    <div>
      <Button type="primary" onClick={handleAddCustomer} style={{ marginBottom: 16 }}>
        Add Customer
      </Button>
      <CustomerTable customers={customers} onRowClick={handleRowClick} />
      <CustomerProfile
        visible={isModalVisible}
        customer={selectedCustomer}
        onClose={handleCloseModal}
        onSave={handleSaveCustomer}
      />
    </div>
  );
};

export default App;
