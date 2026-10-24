import React, { useState } from 'react';

const EmployeeForm = () => {
  const initialFormData = {
    name: '',
    designation: '',
    location: '',
    salary: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  // Handle changes for each form field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear validation error when user begins typing
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    }

    // Clear previous success message upon modifying inputs
    if (successMessage) {
      setSuccessMessage('');
    }
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.designation.trim()) {
      newErrors.designation = 'Designation is required.';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required.';
    }

    if (formData.salary === '' || formData.salary === null || formData.salary === undefined) {
      newErrors.salary = 'Salary is required.';
    } else {
      const salaryNumber = Number(formData.salary);
      if (isNaN(salaryNumber) || salaryNumber < 0) {
        newErrors.salary = 'Salary must be a valid non-negative number.';
      }
    }

    return newErrors;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage('');
    } else {
      // Successful validation
      setErrors({});
      setSuccessMessage('Employee form submitted successfully!');
      // Reset form after successful submission
      setFormData(initialFormData);
    }
  };

  // Form reset handler
  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setSuccessMessage('');
  };

  return (
    <div className="container py-2">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          {/* Card Container */}
          <div className="form-card p-4 p-md-5">
            {/* Page Heading */}
            <div className="mb-4 text-center">
              <h1 className="h2 fw-bold text-dark mb-2">Add Employee</h1>
              <p className="text-muted">
                Fill in the details below to register a new employee into the system.
              </p>
            </div>

            {/* Success Alert */}
            {successMessage && (
              <div
                className="alert alert-success alert-dismissible fade show d-flex align-items-center mb-4"
                role="alert"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="me-2 flex-shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                <div className="flex-grow-1">
                  <strong>Success!</strong> {successMessage}
                </div>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSuccessMessage('')}
                  aria-label="Close"
                ></button>
              </div>
            )}

            {/* Employee Form */}
            <form onSubmit={handleSubmit} noValidate>
              {/* Field 1: Name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  placeholder="Enter full name (e.g., Alex Johnson)"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>

              {/* Field 2: Designation */}
              <div className="mb-3">
                <label htmlFor="designation" className="form-label fw-semibold">
                  Designation <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  className={`form-control ${errors.designation ? 'is-invalid' : ''}`}
                  placeholder="Enter designation (e.g., Software Engineer)"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                />
                {errors.designation && (
                  <div className="invalid-feedback">{errors.designation}</div>
                )}
              </div>

              {/* Field 3: Location */}
              <div className="mb-3">
                <label htmlFor="location" className="form-label fw-semibold">
                  Location <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                  placeholder="Enter location (e.g., New York, NY)"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
                {errors.location && (
                  <div className="invalid-feedback">{errors.location}</div>
                )}
              </div>

              {/* Field 4: Salary */}
              <div className="mb-4">
                <label htmlFor="salary" className="form-label fw-semibold">
                  Salary <span className="text-danger">*</span>
                </label>
                <input
                  type="number"
                  id="salary"
                  name="salary"
                  min="0"
                  step="any"
                  className={`form-control ${errors.salary ? 'is-invalid' : ''}`}
                  placeholder="Enter salary (e.g., 65000)"
                  value={formData.salary}
                  onChange={handleChange}
                  required
                />
                {errors.salary && (
                  <div className="invalid-feedback">{errors.salary}</div>
                )}
              </div>

              {/* Action Buttons: Submit & Reset */}
              <div className="d-flex flex-column flex-sm-row gap-3 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary px-4 py-2 fw-semibold flex-grow-1"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn btn-outline-secondary px-4 py-2 fw-semibold flex-grow-1"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
