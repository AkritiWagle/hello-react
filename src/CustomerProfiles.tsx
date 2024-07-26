import React, { useState } from 'react';
import CustomerTable from './CustomerTable';
import { Customer } from './types';
import { useNavigate, Link } from 'react-router-dom';

const CustomerProfiles: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([
    { id: 1, name: 'John Doe', age: 28, phone: '123-456-7890', address: '123 Main St', isFollowing: false },
    { id: 2, name: 'Jane Smith', age: 34, phone: '987-654-3210', address: '456 Elm St', isFollowing: false },
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
