import React, { useState } from 'react';
import CustomerTable from './CustomerTable';
import { Customer } from './types';
import { useNavigate, Link } from 'react-router-dom';

const CustomerProfiles: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([
    { id: 1, name: 'Akriti Wagle', age: 18, phone: '986000000', address: 'Newroad pokhara', isFollowing: false },
    { id: 2, name: 'Prayas', age: 14, phone: '98765550', address: 'kathmandu', isFollowing: false },
  ]);

  const navigate = useNavigate();

  const handleRowClick = (customer: Customer) => {
    navigate(`/customer-profile/${customer.id}`);
  };

  return (
    <div>
      <h1>Customer Profiles</h1>
      <Link to="/customer-profile/new">
        <button>Create New Profile</button>
      </Link>
      <CustomerTable customers={customers} onRowClick={handleRowClick} />
    </div>
  );
};

export default CustomerProfiles;
