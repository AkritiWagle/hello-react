import React, { useState } from 'react';

interface Customer {
  name: string;
  age: number;
  phone: string;
  address: string;
}

interface CustomerProfileProps {
  customer: Customer;
  onClose: () => void;
}

const CustomerProfile: React.FC<CustomerProfileProps> = ({ customer, onClose }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div>
      <h2>{customer.name}</h2>
      <p>Age: {customer.age}</p>
      <p>Phone: {customer.phone}</p>
      <p>Address: {customer.address}</p>
      <button onClick={handleFollowClick}>
        {isFollowing ? 'Following' : 'Follow'}
      </button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default CustomerProfile;
