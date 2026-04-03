import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // 1. 修正：登入與註冊頁面「不應該」直接 return null
  // 否則你在註冊頁時，Navbar 整個消失，使用者就回不去登入頁了。
  // 我們改為：在登入/註冊頁顯示一個簡單的「返回」Navbar
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <nav className="w-full max-w-[420px] bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center shadow-sm backdrop-blur-md bg-white/90">
        
        {/* 左側：標題或返回鍵 */}
        <div className="flex items-center">
          {location.pathname !== '/' && (
            <button onClick={() => navigate(-1)} className="mr-3 text-gray-600 text-xl">
              ←
            </button>
          )}
          <Link to="/" className="text-xl font-black text-indigo-900 tracking-tight">
             Tour Package App
          </Link>
        </div>
        
        {/* 右側按鈕群 */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              {/* 管理按鈕 */}
              <Link 
                to="/manage-tours" 
                className={`text-xl transition-colors ${location.pathname === '/manage-tours' ? 'text-emerald-500' : 'text-gray-400'}`}
              >
                ⚙️
              </Link>

              {/* 登出按鈕 */}
              <button
                onClick={handleLogout}
                className="text-[10px] font-bold text-red-400 border border-red-100 px-2 py-1 rounded-md uppercase"
              >
                Logout
              </button>

              {/* 頭像 */}
              <div className="w-8 h-8 bg-indigo-50 rounded-full border border-gray-100 overflow-hidden shadow-inner">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.username || 'Guest'}`} alt="avatar" />
              </div>
            </>
          ) : (
            /* 2. 修正：當 user 不存在時，顯示 Login 或 Register 的切換 */
            <div className="space-x-3 text-sm font-bold">
              {location.pathname === '/login' ? (
                <Link to="/register" className="text-emerald-500">Register</Link>
              ) : (
                <Link to="/login" className="text-indigo-600">Login</Link>
              )}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;