import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../app/reducers/userReducers';
import { useNavigate, Link } from 'react-router-dom';
import { HiMail, HiLockClosed } from 'react-icons/hi';

const Signin = () => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const dummyUser = { email, name: "Student", enrolledTutors: [] };
        dispatch(loginSuccess({ user: dummyUser, token: "neon-jwt-token" }));
        navigate('/');
    };

    return (
        <div className="min-h-screen pt-24 flex items-center justify-center px-4">
            <div className="w-full max-w-md relative">
                {/* Background Glow */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-violet-600/20 blur-[100px]" />

                <div className="bg-[#1e293b] border border-slate-800 p-10 rounded-[2.5rem] shadow-2xl relative">
                    <h2 className="text-4xl font-black text-white mb-2 tracking-tight">Welcome <span className="text-violet-500">Back.</span></h2>
                    <p className="text-slate-400 mb-8 font-medium">Continue your journey to mastery.</p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="relative">
                            <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                            <input
                                type="email" placeholder="Email Address" required
                                className="w-full bg-slate-900/50 border border-slate-800 p-4 pl-12 rounded-2xl text-white outline-none focus:border-violet-500 transition-all"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="relative">
                            <HiLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                            <input
                                type="password" placeholder="Password" required
                                className="w-full bg-slate-900/50 border border-slate-800 p-4 pl-12 rounded-2xl text-white outline-none focus:border-violet-500 transition-all"
                            />
                        </div>
                        <button className="w-full bg-white text-slate-900 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-violet-400 hover:text-white transition-all shadow-xl shadow-white/5">
                            Login
                        </button>
                    </form>

                    <p className="mt-8 text-center text-sm text-slate-500">
                        New here? <Link to="/signup" className="text-cyan-400 font-bold hover:underline">Create an Account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signin;