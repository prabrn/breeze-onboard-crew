
import React from 'react';
import Layout from '@/components/Layout';
import EmployeeList from '@/components/EmployeeList';

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Employee Dashboard</h1>
          <p className="text-gray-500 mt-1">
            Manage your employee onboarding process
          </p>
        </div>
        <EmployeeList />
      </div>
    </Layout>
  );
};

export default Index;
