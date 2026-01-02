import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { HiUser, HiMail, HiLockClosed, HiShieldCheck } from 'react-icons/hi';

const Signup = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        // Simulate registration logic
        toast.success("Welcome to the future of learning!");
        toast.info("Please login with your new credentials.");
        navigate('/signin');
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 relative">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 -right-20 w-72 h-72 bg-cyan-600/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-violet-600/10 blur-[120px] rounded-full" />

            <div className="w-full max-w-lg relative">
                <div className="bg-[#1e293b]/50 backdrop-blur-xl border border-slate-800 p-10 rounded-[3rem] shadow-2xl">
                    <div className="mb-10 text-center">
                        <div className="inline-flex p-4 rounded-3xl bg-slate-900 border border-slate-800 mb-4 shadow-inner">
                            <HiShieldCheck className="text-3xl text-cyan-400" />
                        </div>
                        <h2 className="text-4xl font-black text-white tracking-tighter mb-2">
                            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Elite.</span>
                        </h2>
                        <p className="text-slate-400 font-medium">Create an account to start your journey.</p>
                    </div>

                    <form onSubmit={handleSignup} className="space-y-5">
                        <div className="relative group">
                            <HiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                            <input
                                type="text" placeholder="Full Name" required
                                className="w-full bg-slate-950/50 border border-slate-800 p-4 pl-12 rounded-2xl text-white outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 transition-all"
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="relative group">
                            <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                            <input
                                type="email" placeholder="Email Address" required
                                className="w-full bg-slate-950/50 border border-slate-800 p-4 pl-12 rounded-2xl text-white outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 transition-all"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="relative group">
                            <HiLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-violet-400 transition-colors" />
                            <input
                                type="password" placeholder="Create Secure Password" required
                                className="w-full bg-slate-950/50 border border-slate-800 p-4 pl-12 rounded-2xl text-white outline-none focus:border-violet-500/50 focus:ring-4 focus:ring-violet-500/10 transition-all"
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>

                        <div className="pt-4">
                            <button className="w-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all active:scale-95">
                                Initialize Account
                            </button>
                        </div>
                    </form>

                    <div className="mt-10 pt-6 border-t border-slate-800 text-center">
                        <p className="text-sm text-slate-500 font-medium">
                            Already a member? <Link to="/signin" className="text-white font-black hover:text-cyan-400 transition-colors ml-1">Log In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;