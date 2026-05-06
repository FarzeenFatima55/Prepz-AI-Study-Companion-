import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import authService from '../../services/authService';
import { BrainCircuit, Mail, Lock, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { token, user } = await authService.login(email, password);
      login(user, token);
      toast.success('Logged in successfully!');
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Failed to login. Please check your credentials.');
      toast.error(err.message || 'Failed to login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-50">

      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] opacity-30 " />

      <div className=" relative w-full max-w-md px-6">
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl shadow-xl shadow-slate-200/50 p-10">
          {/* Header */}
          <div className="text-center mb-10">
            <div className=" inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6">

              <svg width="56" height="56" viewBox="72 18 82 82" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                  <linearGradient id="faceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0c2a3e" />
                    <stop offset="100%" stopColor="#0a1f2e" />
                  </linearGradient>
                </defs>
                <rect x="111" y="22" width="3" height="13" rx="1.5" fill="url(#bodyGrad)" />
                <circle cx="112" cy="19" r="4.5" fill="url(#bodyGrad)" />
                <rect x="82" y="35" width="62" height="54" rx="12" fill="url(#bodyGrad)" />
                <rect x="89" y="42" width="50" height="40" rx="7" fill="url(#faceGrad)" />
                <rect x="96" y="52" width="12" height="8" rx="4" fill="#22d3ee" opacity="0.95" />
                <rect x="117" y="52" width="12" height="8" rx="4" fill="#22d3ee" opacity="0.95" />
                <circle cx="100" cy="55" r="2" fill="white" opacity="0.85" />
                <circle cx="121" cy="55" r="2" fill="white" opacity="0.85" />
                <rect x="96" y="68" width="4" height="6" rx="1.5" fill="#0ea5e9" opacity="0.5" />
                <rect x="103" y="65" width="4" height="9" rx="1.5" fill="#0ea5e9" opacity="0.75" />
                <rect x="110" y="62" width="4" height="12" rx="1.5" fill="#22d3ee" />
                <rect x="117" y="65" width="4" height="9" rx="1.5" fill="#0ea5e9" opacity="0.75" />
                <rect x="124" y="68" width="4" height="6" rx="1.5" fill="#0ea5e9" opacity="0.5" />
                <rect x="72" y="48" width="10" height="16" rx="5" fill="url(#bodyGrad)" />
                <rect x="144" y="48" width="10" height="16" rx="5" fill="url(#bodyGrad)" />
                <rect x="101" y="89" width="24" height="8" rx="3.5" fill="#0ea5e9" opacity="0.6" />
              </svg>
            </div>
            
              
           <div className="flex flex-col items-center mb-4">
  <div className="flex items-center gap-[1px]">
    <span style={{ fontFamily: "'Georgia', serif" }} className="text-3xl font-black leading-none text-black">P</span>
    <span style={{ fontFamily: "'Arial', sans-serif" }} className="text-sm font-bold tracking-[0.2em] text-black">REPZ</span>
  </div>
  <p className="text-[8px] font-medium tracking-widest uppercase mt-0.5 text-black">
    Your AI Study Companion
  </p>
</div>
           
            
            <p className="text-slate-500 text-sm">
              Sign in to continue your journey
            </p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">
                Email
              </label>
              <div className="relative group">
                <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-200 ${focusedField === 'email'
                  ? 'text-emerald-500'
                  : 'text-slate-400'
                  }`}>
                  <Mail className="h-5 w-5" strokeWidth={2} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full h-12 pl-12 pr-4 border-2 border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm font-medium transition-all duration-200 focus:outline-none focus:border-emerald-500 focus:bg-white focus:shadow-lg focus:shadow-emerald-500/10"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className=" space-y-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">
                Password
              </label>
              <div className="relative group">
                <div
                  className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-200 ${focusedField === 'password'
                    ? 'text-emerald-500'
                    : 'text-slate-400'
                    }`}
                >
                  <Lock className=" h-5 w-5" strokeWidth={2} />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full h-12 pl-12 pr-4 border-2 border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm font-medium transition-all duration-200 focus:outline-none focus:border-emerald-500 focus:bg-white focus:shadow-lg focus:shadow-emerald-500/10"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="rounded-lg bg-red-50 border border-red-200 p-3">
                <p className="text-xs text-red-600 font-medium text-center">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="group relative w-full h-12 bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-600 active:scale-[0.98] text-white text-sm font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 shadow-lg shadow-emerald-500/25 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign in
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" strokeWidth={2.5} />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -transxfa group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-slate-200/60">
            <p className="text-center text-sm text-slate-600">
              Don't have an account?{' '}
              <Link to="/register" className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors duration-200">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Subtle footer text */}
        <p className="text-center text-xs text-slate-400 mt-6">
          By continuing, you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  )
}

export default LoginPage