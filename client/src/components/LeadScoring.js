import React, { useState } from 'react';

function LeadScoring() {
  const [leads, setLeads] = useState([]);

  const calculateScore = (lead) => {
    // Calculate lead score based on lead data
    // Replace this with your actual lead scoring logic
    const score = Math.random() * 100;
    return score.toFixed(2);
  };

  const handleFetchLeads = () => {
    // Fetch leads data from the backend API
    fetch('/api/leads')
      .then(response => response.json())
      .then(data => setLeads(data))
      .catch(error => console.log(error));
  };

  return (
    <div className="lead-scoring">
      <h2>Lead Scoring</h2>
      <button onClick={handleFetchLeads}>Fetch Leads</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leads.map(lead => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
              <td>{calculateScore(lead)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeadScoring;
