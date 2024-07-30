// src/EditCustomerProfile.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Input, Button, InputNumber } from 'antd';
import { useCustomer } from './customerContext';

const EditCustomerProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { handleView, handleEdit } = useCustomer();
  const navigate = useNavigate();
  const [isFollowing, setIsFollowing] = useState(false);

  const [form] = Form.useForm();

  useEffect(() => {
    if (id) {
      const customer = handleView(Number(id));
      if (customer) {
        setIsFollowing(customer.isFollowing);
        form.setFieldsValue(customer);
      }
    }
  }, [id, handleView, form]);

  const onCustomerEdit = () => {
    form
      .validateFields()
      .then((value) => {
        handleEdit(Number(id), { ...value, isFollowing });
        navigate('/profiles');
      })
      .catch((error) => console.error(error));
  };

  const onCustomerFollow = () => {
    setIsFollowing((prev) => !prev);
  };

  return (
    <div>
      <h1>Edit Customer Profile</h1>
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
          <Button onClick={onCustomerFollow}>{isFollowing ? 'Unfollow' : 'Follow'}</Button>
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={onCustomerEdit}>
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditCustomerProfile;
