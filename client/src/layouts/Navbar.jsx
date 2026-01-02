import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../app/reducers/userReducers';
import { HiAcademicCap, HiLogout, HiUserCircle } from 'react-icons/hi'; // Added the missing import

const Navbar = () => {
    const { isAuthenticated, user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0f172a]/80 backdrop-blur-xl border-b border-slate-800/50 px-8 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:rotate-12 transition-transform">
                        <HiAcademicCap className="text-white text-xl" />
                    </div>
                    <span className="text-2xl font-black text-white tracking-tighter">
                        NEON<span className="text-violet-500 underline decoration-cyan-400 decoration-4 underline-offset-4">TUTOR</span>
                    </span>
                </Link>

                {/* Nav Links */}
                <div className="flex items-center gap-8">
                    <Link to="/" className="text-slate-400 font-bold hover:text-white transition-colors text-sm uppercase tracking-widest">Explore</Link>

                    {isAuthenticated ? (
                        <div className="flex items-center gap-6">
                            <Link to="/my-tutors" className="text-slate-400 font-bold hover:text-white transition-colors text-sm uppercase tracking-widest">My Learning</Link>
                            <div className="h-6 w-[1px] bg-slate-800"></div>
                            <button
                                onClick={() => dispatch(logout())}
                                className="flex items-center gap-2 text-rose-400 font-bold hover:text-rose-300 transition-colors text-sm uppercase tracking-widest"
                            >
                                <HiLogout size={18} /> Logout
                            </button>
                        </div>
                    ) : (
                        <Link to="/signin" className="bg-white text-slate-900 px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-violet-400 hover:text-white transition-all">
                            Sign In
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;