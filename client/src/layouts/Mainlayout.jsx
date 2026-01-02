import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-violet-500/30">
            <Navbar />
            <main className="pt-28 pb-20 px-4 max-w-7xl mx-auto">
                <Outlet />
            </main>
            <ToastContainer theme="dark" position="bottom-right" />
        </div>
    );
};

export default MainLayout;