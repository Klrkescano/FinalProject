import React from 'react';
import SideNav from './dashboard/_components/SideNav';
import DashboardHeader from './dashboard/_components/DashboardHeader';

function DashboardLayout({ children }) {
  return (
    <div>
      <div className="fixed md:w-64 hidden md:block shadow-md">
        <SideNav />
      </div>
      <div className="md:ml-64">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
