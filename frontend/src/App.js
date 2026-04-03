import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Home from './pages/Home';          
import ManageTours from './pages/Tours'; // 確保路徑指向你改好的 ManageTours 檔案
import { AuthProvider, useAuth } from './context/AuthContext';
import { TourProvider } from './context/TourContext';

// 建立一個保護路由
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <TourProvider>
        <Router>
          {/* 1. 最外層：全螢幕灰色背景，模擬手機放在桌上的感覺 */}
          <div className="bg-gray-100 min-h-screen">
            
            {/* 2. 手機容器：限制最大寬度 420px 並居中 */}
            <div className="max-w-[420px] mx-auto bg-white min-h-screen shadow-2xl relative flex flex-col">
              
              {/* 3. 手機版 Navbar (它會自動繼承父層的 420px 寬度) */}
              <Navbar />
              
              {/* 4. 內容區：pt-16 是為了空出位置給 fixed 的 Navbar */}
              <div className="flex-1 pt-16">
                <Routes>
                  {/* 登入與註冊頁通常不顯示 Navbar，這在 Navbar.jsx 裡處理了 */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  
                  {/* 登入後首頁：手機 App 歡迎介面 */}
                  <Route path="/" element={<Home />} />
                  
                  {/* 管理頁：手機版 CRUD 介面 */}
                  <Route path="/manage-tours" element={
                    <PrivateRoute>
                      <ManageTours />
                    </PrivateRoute>
                  } />
                  
                  <Route path="/profile" element={<Profile />} />
                  
                  {/* 自動導向：如果輸入錯誤網址，回首頁 */}
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </div>

              {/* 5. 裝飾用：手機底部黑條 (選配，增加 APP 感) */}
              <div className="h-6 bg-white flex justify-center items-end pb-2">
                <div className="w-28 h-1 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </Router>
      </TourProvider>
    </AuthProvider>
  );
}

export default App;