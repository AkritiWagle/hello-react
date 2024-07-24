import React, { useState } from 'react';
import CustomerTable from './CustomerTable';
import CustomerProfile from './CustomerProfile';

interface Customer {
  id: number;
  name: string;
  age: number;
  phone: string;
  address: string;
}

const App: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const customers: Customer[] = [
    { id: 1, name: 'Akriti Wagle', age: 20, phone: '9800000000', address: 'Newroad Nepal' },
    { id: 2, name: 'Yamaha', age: 14, phone: '900000007', address: 'Annapurna' },
  ];

  const handleRowClick = (customer: Customer) => {
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
      {selectedCustomer && isModalVisible && (
        <CustomerProfile
          customer={selectedCustomer}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;
