
import React from 'react';
import Layout from '@/components/Layout';
import EmployeeForm from '@/components/EmployeeForm';

const AddEmployee = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Employee Onboarding</h1>
          <p className="text-gray-500 mt-1">
            Add a new employee to your organization
          </p>
        </div>
        <EmployeeForm />
      </div>
    </Layout>
  );
};

export default AddEmployee;
