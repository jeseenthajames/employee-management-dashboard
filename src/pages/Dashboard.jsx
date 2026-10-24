import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initial data load on component mount
  useEffect(() => {
    let isSubscribed = true;

    const loadInitialData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (isSubscribed) {
          setEmployees(data);
          setError(null);
        }
      } catch (err) {
        if (isSubscribed) {
          setError(err.message || 'Failed to fetch employee data. Please try again.');
        }
      } finally {
        if (isSubscribed) {
          setLoading(false);
        }
      }
    };

    loadInitialData();

    return () => {
      isSubscribed = false;
    };
  }, []);

  // Manual refresh or retry handler triggered by user interaction
  const handleRefresh = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setEmployees(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch employee data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-container">
      {/* Page Header Section */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 pb-2 border-bottom">
        <div>
          <h1 className="h2 fw-bold text-dark mb-1">Employee Dashboard</h1>
          <p className="text-muted mb-md-0">
            Overview and directory of all registered organization employees.
          </p>
        </div>
        {!loading && !error && (
          <div className="d-flex align-items-center gap-2 mt-2 mt-md-0">
            <span className="badge bg-primary fs-6 px-3 py-2 rounded-pill shadow-sm">
              Total Employees: {employees.length}
            </span>
            <button
              onClick={handleRefresh}
              className="btn btn-outline-primary btn-sm px-3 py-2 fw-medium"
              title="Refresh employee data"
            >
              Refresh
            </button>
          </div>
        )}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="content-card p-5 text-center my-4">
          <div
            className="spinner-border text-primary mb-3"
            style={{ width: '3rem', height: '3rem' }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <h5 className="text-dark fw-semibold mb-1">Loading employee data...</h5>
          <p className="text-muted mb-0">Please wait while we retrieve the records from the server.</p>
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div className="alert alert-danger shadow-sm rounded-3 p-4 my-4" role="alert">
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3">
            <div>
              <h5 className="alert-heading fw-bold mb-1">Unable to Load Data</h5>
              <p className="mb-0 text-danger-emphasis">{error}</p>
            </div>
            <button
              onClick={handleRefresh}
              className="btn btn-danger px-4 py-2 fw-semibold"
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {/* Employee Data Table */}
      {!loading && !error && (
        <div className="content-card overflow-hidden">
          <div className="table-responsive">
            <table className="table employee-table align-middle">
              <thead>
                <tr>
                  <th scope="col" style={{ width: '15%' }}>ID</th>
                  <th scope="col" style={{ width: '45%' }}>Name</th>
                  <th scope="col" style={{ width: '40%' }}>Email</th>
                </tr>
              </thead>
              <tbody>
                {employees.length > 0 ? (
                  employees.map((employee) => (
                    <tr key={employee.id}>
                      <td>
                        <span className="id-badge">#{employee.id}</span>
                      </td>
                      <td>
                        <span className="fw-semibold text-dark">{employee.name}</span>
                      </td>
                      <td>
                        <a
                          href={`mailto:${employee.email}`}
                          className="email-link"
                          title={`Send email to ${employee.name}`}
                        >
                          {employee.email}
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center py-4 text-muted">
                      No employee records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
