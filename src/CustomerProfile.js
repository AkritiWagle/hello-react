// src/CustomerProfile.js
import React from 'react';
import { Modal } from 'antd';

const CustomerProfile = ({ visible, customer, onClose }) => {
  return (
    <Modal
      title="Customer Details"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      {customer ? (
        <div>
          <p>Name: {customer.name}</p>
          <p>Age: {customer.age}</p>
          <p>Phone: {customer.phone}</p>
          <p>Address: {customer.address}</p>
        </div>
      ) : (
        <p>No customer selected</p>
      )}
    </Modal>
  );
};

export default CustomerProfile;


