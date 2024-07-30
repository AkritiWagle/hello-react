import { createContext, useContext, useState } from 'react';
import { Customer, CustomerFormValues } from './types';

interface CustomerContextProps {
  customers: Customer[];
  handleView: (id: number) => Customer | undefined;
  handleEdit: (id: number, updatedData: Customer) => void;
  createCustomer: (data: CustomerFormValues) => void;
}

const CustomerContext = createContext<CustomerContextProps | undefined>(undefined);

function CustomerProvider(props: { children: React.ReactNode }) {
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: 1,
      name: 'Akriti Wagle',
      age: 18,
      phone: '986000000',
      address: 'Newroad pokhara',
      isFollowing: false,
    },
    { id: 2, name: 'Prayas', age: 14, phone: '98765550', address: 'kathmandu', isFollowing: false },
  ]);

  function handleView(id: number) {
    const customer = customers.find((customer) => customer.id === id);
    return customer;
  }

  function handleEdit(id: number, updatedData: Customer) {
    const updatedCustomers = customers.map((customer) => {
      if (customer.id === id) {
        return { ...customer, ...updatedData };
      }

      return customer;
    });

    setCustomers(updatedCustomers);
  }

  function createCustomer(data: CustomerFormValues) {
    const id = customers.length + 1;
    const newCustomer = { id, ...data };
    setCustomers([...customers, newCustomer]);
  }

  return (
    <CustomerContext.Provider value={{ customers, handleEdit, handleView, createCustomer }}>
      {props.children}
    </CustomerContext.Provider>
  );
}

export const useCustomer = (): CustomerContextProps => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error('useCustomer must be used within a CustomerProvider');
  }
  return context;
};

export default CustomerProvider;
