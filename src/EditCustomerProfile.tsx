// src/EditCustomerProfile.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { Customer } from './types';

const EditCustomerProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Fetch customer data for the given id and set it to state
      // Example: setCustomer(fetchedCustomer);
      // For now, we'll use a dummy customer for demonstration
      setCustomer({
        id: parseInt(id, 10),
        name: 'Dummy Name',
        age: 25,
        phone: '1234567890',
        address: '123 Street Name',
        isFollowing: false,
      });
    }
  }, [id]);

  const handleSave = () => {
    // Save the updated customer data
    // After saving, redirect to the customer profiles list
    navigate('/profiles');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomer(prevState => prevState ? { ...prevState, [name]: value } : null);
  };

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Customer Profile</h1>
      <Form>
        <Form.Item label="Name">
          <Input name="name" value={customer.name} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Age">
          <Input name="age" type="number" value={customer.age} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Phone">
          <Input name="phone" value={customer.phone} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Address">
          <Input name="address" value={customer.address} onChange={handleChange} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleSave}>Save</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditCustomerProfile;
