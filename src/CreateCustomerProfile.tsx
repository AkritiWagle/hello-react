// src/CreateCustomerProfile.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, InputNumber } from 'antd';
import { useCustomer } from './customerContext';

const CreateCustomerProfile: React.FC = () => {
  const { createCustomer } = useCustomer();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSave = () => {
    form
      .validateFields()
      .then((value) => {
        createCustomer(value);
        navigate('/profiles');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Create Customer Profile</h1>
      <Form form={form} validateTrigger="onChange">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Age"
          name="age"
          rules={[{ required: true, message: 'Please input your age!' }]}>
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: false, message: 'Please input your phone!' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: 'Please input your address!' }]}>
          <Input />
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

export default CreateCustomerProfile;
