// src/App.js
import React, { useState } from 'react';
import CustomerTable from './CustomerTable';
import CustomerProfile from './CustomerProfile';


const App = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const customers = [
    { id: 1, name: 'John Doe', age: 28, phone: '123-456-7890', address: '123 Main St' },
    { id: 2, name: 'Jane Smith', age: 34, phone: '987-654-3210', address: '456 Elm St' },
  ];

  
  const handleRowClick = (customer) => {
    setSelectedCustomer(customer);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedCustomer(null);
  };

  return (
    <div>
      <CustomerTable customers={customers} onRowClick={handleRowClick} />
      <CustomerProfile
        visible={isModalVisible}
        customer={selectedCustomer}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;
