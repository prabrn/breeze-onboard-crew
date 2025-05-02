
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Briefcase } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-brand-600" />
            <span className="font-semibold text-xl text-gray-800">Breeze Onboard</span>
          </Link>
          <nav className="flex gap-4">
            <Link to="/">
              <Button variant="ghost">Dashboard</Button>
            </Link>
            <Link to="/add-employee">
              <Button>Add Employee</Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-100 py-4 border-t">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Breeze Onboard. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
