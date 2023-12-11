import React from 'react';
import CustomerList from './CustomerList';
import LeadScoring from './LeadScoring';
import SalesPerformance from './SalesPerformance';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>SalesSage Dashboard</h1>
      <CustomerList />
      <LeadScoring />
      <SalesPerformance />
    </div>
  );
}

export default Dashboard;
