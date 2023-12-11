import React, { useState, useEffect } from 'react';

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch customers data from the backend API
    fetch('/api/customers')
      .then(response => response.json())
      .then(data => setCustomers(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="customer-list">
      <h2>Customer List</h2>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>
            <span>{customer.name}</span>
            <span>{customer.email}</span>
            <span>{customer.phone}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList;
