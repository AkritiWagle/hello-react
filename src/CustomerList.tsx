import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import CustomerTable from './CustomerTable';
import { Customer } from './types';
import { useCustomer } from './customerContext';

const CustomerList: React.FC = () => {
  const { customers } = useCustomer();

  const navigate = useNavigate();

  const handleRowClick = (customer: Customer) => {
    navigate(`/CustomerProfile/${customer.id}`);
  };

  return (
    <div>
      <h1>Customer Profiles</h1>
      <Link to="/CustomerProfile/new">
        <button>Create New Profile</button>
      </Link>
      <CustomerTable customers={customers} onRowClick={handleRowClick} />
    </div>
  );
};

export default CustomerList;
