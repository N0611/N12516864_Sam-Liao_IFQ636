import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axiosInstance from '../axiosConfig';
import { Link } from 'react-router-dom';

const Home = () => {
  const { user } = useAuth();
  const [tours, setTours] = useState([]);

  // 🔴 關鍵：進入頁面立刻抓取最新資料
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await axiosInstance.get('/api/tours');
        setTours(res.data);
      } catch (err) { 
        console.error("Home fetch error:", err); 
      }
    };
    fetchTours();
  }, []);

  return (
    <div className="max-w-[420px] mx-auto bg-white min-h-screen flex flex-col font-sans">
      {/* Header */}
      <div className="p-8 flex justify-between items-center">
        <div>
          <p className="text-gray-400 text-xs font-medium">Good morning!</p>
          <h2 className="font-bold text-xl text-gray-800">Admin ({user?.username})</h2>
        </div>
        <div className="w-12 h-12 bg-indigo-100 rounded-full border-2 border-white shadow-sm overflow-hidden">
          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.username}`} alt="avatar" />
        </div>
      </div>

      {/* Stats Card */}
      <div className="px-8 mb-8">
        <div className="bg-white border border-gray-50 p-6 rounded-[32px] shadow-sm flex items-center space-x-5">
          <div className="bg-orange-50 p-4 rounded-2xl text-2xl">📋</div>
          <div>
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Order List</p>
            <p className="text-3xl font-black text-gray-900 mt-1">0</p>
          </div>
        </div>
      </div>

      {/* View Package List */}
      <div className="px-8 flex-1 overflow-y-auto pb-24">
        <div className="flex justify-between items-center mb-5">
          <h3 className="font-bold text-gray-800">View Package</h3>
          <span className="text-xs text-gray-400">{tours.length} items</span>
        </div>
        
        <div className="space-y-6">
          {tours.map(tour => (
            <div key={tour._id} className="flex space-x-4 items-center">
              <div className="w-24 h-24 rounded-[24px] overflow-hidden bg-gray-50 flex-shrink-0 shadow-sm">
                {/* 🔴 顯示 Cloudinary 圖片 */}
                <img src={tour.imageUrl || "https://via.placeholder.com/150"} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-800 text-[15px] truncate">{tour.title}</h4>
                <p className="text-gray-400 text-[11px] font-bold mt-1 uppercase truncate">{tour.location}</p>
                <div className="mt-3">
                  <span className="px-4 py-1.5 rounded-xl text-[10px] font-black bg-[#ADFF2F] text-green-900 shadow-sm">
                    AUD {tour.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Button */}
      <div className="p-8 sticky bottom-0 bg-white/90 backdrop-blur-md">
        <Link to="/manage-tours" className="block w-full bg-[#00A651] text-white text-center font-bold py-5 rounded-[24px] shadow-lg shadow-green-100 active:scale-95 transition-all uppercase tracking-widest">
          Manage Tour Management
        </Link>
      </div>
    </div>
  );
};

export default Home;