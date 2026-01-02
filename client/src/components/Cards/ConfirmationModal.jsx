import { HiLightningBolt } from "react-icons/hi"; // <--- Add this line
const ConfirmationModal = ({ isOpen, onClose, onConfirm, tutor, selectedSlot }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-xl bg-slate-950/60">
            <div className="bg-[#0f172a] border border-slate-800 rounded-[2.5rem] p-8 max-w-sm w-full shadow-2xl relative overflow-hidden">
                {/* Decorative background glow */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-violet-600/20 blur-[100px]" />
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-cyan-600/20 blur-[100px]" />

                <div className="relative text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-slate-800 mb-6">
                        <HiLightningBolt className="text-4xl text-violet-400 animate-pulse" />
                    </div>
                    <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Ready to Level Up?</h2>
                    <p className="text-slate-400 text-sm mb-8">Confirming your enrollment with <span className="text-white font-bold">{tutor.name}</span>.</p>

                    <div className="bg-slate-900/50 rounded-2xl p-4 mb-8 border border-slate-800 text-left space-y-2">
                        <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest">
                            <span className="text-slate-500">Session:</span>
                            <span className="text-violet-400">{selectedSlot}</span>
                        </div>
                        <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest">
                            <span className="text-slate-500">Total Price:</span>
                            <span className="text-cyan-400">₹{tutor.price}</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <button onClick={onConfirm} className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-tighter hover:bg-violet-400 hover:text-white transition-all shadow-xl">
                            Unlock Now
                        </button>
                        <button onClick={onClose} className="w-full py-4 text-slate-500 font-bold hover:text-white transition">
                            Maybe Later
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;