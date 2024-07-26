import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { Customer } from './types';

const initialCustomerState: Customer = {
  id: 0, // Changed from `null` to `0`
  name: '',
  age: 0,
  phone: '',
  address: '',
  isFollowing: false,
};

const CustomerProfile: React.FC = () => {
  const [customer, setCustomer] = useState<Customer>(initialCustomerState);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id !== 'new') {
      // Fetch customer data from your data source here
      // Example:
      const existingCustomer: Customer = {
        id: 1,
        name: 'John Doe',
        age: 28,
        phone: '123-456-7890',
        address: '123 Main St',
        isFollowing: false,
      };
      setCustomer(existingCustomer);
      form.setFieldsValue(existingCustomer);
    }
  }, [id, form]);

  const handleSave = () => {
    form.validateFields().then(values => {
      const updatedCustomer = { ...customer, ...values };
      // Save updated customer data here
      navigate('/customer-profiles');
    });
  };

  const handleFollowClick = () => {
    setCustomer(prev => ({ ...prev, isFollowing: !prev.isFollowing }));
    form.setFieldsValue({ isFollowing: !customer.isFollowing });
  };

  return (
    <div>
      <h1>{id === 'new' ? 'Create Customer Profile' : 'Edit Customer Profile'}</h1>
      <Form form={form} layout="vertical" initialValues={customer}>
        <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter the name' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="age" label="Age" rules={[{ required: true, message: 'Please enter the age' }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name="phone" label="Phone" rules={[{ required: true, message: 'Please enter the phone' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="address" label="Address" rules={[{ required: true, message: 'Please enter the address' }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button onClick={handleFollowClick}>
            {customer.isFollowing ? 'Following' : 'Follow'}
          </Button>
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