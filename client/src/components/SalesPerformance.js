import React, { useState, useEffect } from 'react';

function SalesPerformance() {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    // Fetch sales data from the backend API
    fetch('/api/sales')
      .then(response => response.json())
      .then(data => setSalesData(data))
      .catch(error => console.log(error));
  }, []);

  const calculateTotalSales = () => {
    let totalSales = 0;
    salesData.forEach(sale => {
      totalSales += sale.amount;
    });
    return totalSales.toFixed(2);
  };

  const calculateAverageSales = () => {
    const totalSales = calculateTotalSales();
    const averageSales = totalSales / salesData.length;
    return averageSales.toFixed(2);
  };

  return (
    <div className="sales-performance">
      <h2>Sales Performance</h2>
      <div>
        <p>Total Sales: ${calculateTotalSales()}</p>
        <p>Average Sales: ${calculateAverageSales()}</p>
      </div>
    </div>
  );
}

export default SalesPerformance;
