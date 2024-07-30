import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { Customer } from './types';

interface CustomerProfileProps {
  visible: boolean;
  customer: Customer | null;
  onClose: () => void;
  onSave: (customer: Customer) => void;
}

// const initialCustomer: Customer = {
//   id: 0,
//   name: '',
//   age: 0,
//   phone: '',
//   address: '',
//   isFollowing: false,
// };


const CreateCustomerProfile: React.FC<CustomerProfileProps> = ({ visible, customer, onClose, onSave }) => {
  const [form] = Form.useForm();
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    if (customer) {
      form.setFieldsValue(customer);
      setIsFollowing(customer.isFollowing);
    } else {
      form.resetFields();
    }
  }, [customer, form]);

  const handleSave = () => {
    form.validateFields()
      .then(values => {
        onSave({ ...values, isFollowing });
        onClose();
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Modal
      visible={visible}
      title={customer ? "Edit Customer Profile" : "Create Customer Profile"}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSave}>
          Save
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical" name="customerForm">
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
          <Button onClick={() => setIsFollowing(!isFollowing)}>
            {isFollowing ? 'Following' : 'Follow'}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateCustomerProfile;