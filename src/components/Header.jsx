import { Briefcase, Moon, Sun } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthenticated = localStorage.getItem("employee_manager_authenticated") === "true";

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // ✅ AFTER hooks → now conditionally render
  const hideHeaderOn = ["/login", "/signup"];
  if (hideHeaderOn.includes(location.pathname)) {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("employee_manager_authenticated");
    navigate("/login");
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Briefcase size={28} />
          <span className="text-2xl font-bold tracking-wide">Employee Manager</span>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>

          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          )}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-white text-blue-600 p-2 rounded-full shadow hover:bg-gray-100"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
