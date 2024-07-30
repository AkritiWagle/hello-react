// src/CustomerProfile.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { Customer } from './types';

const initialCustomer: Customer = {
  id: 0,
  name: '',
  age: 0,
  phone: '',
  address: '',
  isFollowing: false,
};

const CustomerProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [customer, setCustomer] = useState<Customer>(initialCustomer);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Fetch customer data for the given id and set it to state
      // Example: setCustomer(fetchedCustomer);
    }
  }, [id]);

  const handleSave = () => {
    // Save the customer data
    // After saving, redirect to the customer profiles list
    navigate('/profiles');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomer((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <h1>{id ? 'Edit Customer Profile' : 'Create Customer Profile'}</h1>
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
          <Button type="primary" onClick={handleSave}>
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CustomerProfile;
