import TourForm from '../components/TourForm';
import TourList from '../components/TourList';
import { useState } from 'react';

const ManageTours = () => {
  const [editingTour, setEditingTour] = useState(null);
  const [tours, setTours] = useState([]); // 這裡可以從 Context 抓，或者由子組件更新

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Admin Dashboard: Manage Tours</h1>
      </div>
      
      {/* 編輯/新增表單 */}
      <TourForm 
        editingTour={editingTour} 
        setEditingTour={setEditingTour} 
        tours={tours}
        setTours={setTours}
      />
      
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Current Inventory</h2>
        <TourList setEditingTour={setEditingTour} tours={tours} setTours={setTours} />
      </div>
    </div>
  );
};

export default ManageTours;
