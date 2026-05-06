import React from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  LayoutDashboard,
  FileText,
  User,
  LogOut,
  BrainCircuit,
  BookOpen,
  X,
} from "lucide-react";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navLinks = [
    { to: "/dashboard", icon: LayoutDashboard, text: "Dashboard" },
    { to: "/documents", icon: FileText, text: "Documents" },
    { to: "/flashcards", icon: BookOpen, text: "Flashcards" },
    { to: "/profile", icon: User, text: "Profile" },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/30 z-40 md:hidden transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={toggleSidebar}
        aria-hidden="true"
      ></div>

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white/90 backdrop-blur-lg border-r border-slate-200/60 z-50 md:relative md:w-64 md:shrink-0 md:flex md:flex-col md:translate-x-0 transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Logo and Close button for mobile */}
        <div className="flex items-center justify-between h-16 px-5 border-b border-slate-200/60">
         <div className="flex items-center gap-3">
  <svg width="52" height="44" viewBox="72 18 82 82" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0ea5e9"/>
        <stop offset="100%" stopColor="#22d3ee"/>
      </linearGradient>
      <linearGradient id="faceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0c2a3e"/>
        <stop offset="100%" stopColor="#0a1f2e"/>
      </linearGradient>
    </defs>
    <rect x="111" y="22" width="3" height="13" rx="1.5" fill="url(#bodyGrad)"/>
    <circle cx="112" cy="19" r="4.5" fill="url(#bodyGrad)"/>
    <rect x="82" y="35" width="62" height="54" rx="12" fill="url(#bodyGrad)"/>
    <rect x="89" y="42" width="50" height="40" rx="7" fill="url(#faceGrad)"/>
    <rect x="96" y="52" width="12" height="8" rx="4" fill="#22d3ee" opacity="0.95"/>
    <rect x="117" y="52" width="12" height="8" rx="4" fill="#22d3ee" opacity="0.95"/>
    <circle cx="100" cy="55" r="2" fill="white" opacity="0.85"/>
    <circle cx="121" cy="55" r="2" fill="white" opacity="0.85"/>
    <rect x="96" y="68" width="4" height="6" rx="1.5" fill="#0ea5e9" opacity="0.5"/>
    <rect x="103" y="65" width="4" height="9" rx="1.5" fill="#0ea5e9" opacity="0.75"/>
    <rect x="110" y="62" width="4" height="12" rx="1.5" fill="#22d3ee"/>
    <rect x="117" y="65" width="4" height="9" rx="1.5" fill="#0ea5e9" opacity="0.75"/>
    <rect x="124" y="68" width="4" height="6" rx="1.5" fill="#0ea5e9" opacity="0.5"/>
    <rect x="72" y="48" width="10" height="16" rx="5" fill="url(#bodyGrad)"/>
    <rect x="144" y="48" width="10" height="16" rx="5" fill="url(#bodyGrad)"/>
    <rect x="101" y="89" width="24" height="8" rx="3.5" fill="#0ea5e9" opacity="0.6"/>
  </svg>

  <div className="flex flex-col justify-center">
    <div className="flex items-baseline gap-[1px] leading-none">
<span style={{ fontFamily: "'Georgia', serif" }} className="text-3xl font-black leading-none text-black">
  P
</span>
<span style={{ fontFamily: "'Arial', sans-serif" }} className="text-sm font-bold tracking-[0.2em] text-black">
  REPZ
</span>
    </div>
  <p className="text-[8px] font-medium tracking-widest uppercase mt-0.5 text-black">
  Your AI Study Companion
</p>
  </div>
</div>
          <button onClick={toggleSidebar} className="md:hidden text-slate-500 hover:text-slate-800">
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-1.5">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={toggleSidebar}
              className={({ isActive }) =>
                `group flex items-center gap-3 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 ${isActive
                  ? "bg-linear-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <link.icon
                    size={18}
                    strokeWidth={2.5}
                    className={`transition-transform duration-200 ${isActive ? "" : "group-hover:scale-110"
                      }`}
                  />
                  {link.text}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Logout Section */}
        <div className="px-3 py-4 border-t border-slate-200/60">
          <button onClick={handleLogout} className="group flex items-center gap-3 w-full px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-200">
            <LogOut
              size={18}
              strokeWidth={2.5}
              className="transition-transform duration-200 group-hover:scale-110"
            />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
