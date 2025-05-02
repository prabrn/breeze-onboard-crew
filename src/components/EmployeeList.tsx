
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { Employee } from '@/lib/supabase';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';

export default function EmployeeList() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployees();
  }, []);

  async function fetchEmployees() {
    try {
      const { data, error } = await supabase
        .from('employees')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      // Type assertion to ensure data is treated as Employee[]
      setEmployees(data as Employee[] || []);
    } catch (error) {
      console.error('Error fetching employees:', error);
      toast.error('Failed to load employees. Please refresh the page.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl flex justify-between items-center">
          Employee Directory
          <Badge variant="outline" className="ml-2">
            {employees.length} {employees.length === 1 ? 'Employee' : 'Employees'}
          </Badge>
        </CardTitle>
        <CardDescription>
          View all onboarded employees in your organization
        </CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-pulse text-center">
              <div className="h-4 w-32 bg-gray-200 rounded mb-2 mx-auto"></div>
              <div className="h-4 w-24 bg-gray-200 rounded mx-auto"></div>
            </div>
          </div>
        ) : employees.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p className="text-lg mb-2">No employees found</p>
            <p>Add your first employee to get started</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Mobile</TableHead>
                  <TableHead>Experience (Years)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell className="font-medium">{employee.name}</TableCell>
                    <TableCell>{employee.email}</TableCell>
                    <TableCell>{employee.mobile}</TableCell>
                    <TableCell>{employee.experience}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
