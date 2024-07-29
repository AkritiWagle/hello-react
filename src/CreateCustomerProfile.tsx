// src/CreateCustomerProfile.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const CreateCustomerProfile: React.FC = () => {
  const [customer, setCustomer] = useState<Customer>(initialCustomer);
  const navigate = useNavigate();

  const handleSave = () => {
    // Save the new customer data
    // After saving, redirect to the customer profiles list
    navigate('/profiles');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomer(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <h1>Create Customer Profile</h1>
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

export default CreateCustomerProfile;
