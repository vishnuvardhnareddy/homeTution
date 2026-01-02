import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMyTutors } from '../../app/reducers/userReducers';
import { toast } from 'react-toastify';
import { HiLightningBolt, HiAcademicCap, HiClock, HiCurrencyRupee } from 'react-icons/hi';
import ConfirmationModal from './ConfirmationModal';

const TutorCard = ({ tutor, isEnrolled }) => {
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch();
    const { user, isAuthenticated } = useSelector(state => state.auth);

    // Find the specific slot the user booked if they are already enrolled
    const enrollmentDetails = user?.enrolledTutors?.find(item => item.tutorId === tutor.id);

    const handleBookClick = () => {
        if (!isAuthenticated) return toast.error("Please sign in to book a session");
        if (!selectedSlot) return toast.warning("Please select a time slot first");
        setIsModalOpen(true);
    };

    // --- THIS IS THE FUNCTION THAT WAS MISSING ---
    const handleFinalPayment = () => {
        toast.success(`Payment Successful! You are now learning with ${tutor.name}`);

        const newEnrollment = { tutorId: tutor.id, slot: selectedSlot };
        const updated = [...(user.enrolledTutors || []), newEnrollment];

        dispatch(updateMyTutors(updated));
        setIsModalOpen(false);
    };

    const handleLeave = () => {
        const updated = user.enrolledTutors.filter(item => item.tutorId !== tutor.id);
        dispatch(updateMyTutors(updated));
        toast.info(`Subscription cancelled with ${tutor.name}`);
    };

    return (
        <>
            <div className="relative group p-[1px] rounded-[2rem] bg-gradient-to-br from-violet-500 via-transparent to-cyan-400 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-500">
                <div className="bg-[#1e293b] rounded-[2rem] p-6 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-gradient-to-tr from-violet-600 to-indigo-600 p-3 rounded-2xl">
                            <HiAcademicCap className="text-white text-2xl" />
                        </div>
                        {isEnrolled && (
                            <span className="bg-cyan-500/10 text-cyan-400 text-[10px] font-black px-3 py-1 rounded-full border border-cyan-500/20 uppercase">
                                Enrolled: {enrollmentDetails?.slot}
                            </span>
                        )}
                    </div>

                    <h3 className="text-xl font-extrabold text-white mb-1 group-hover:text-violet-300 transition-colors">
                        {tutor.name}
                    </h3>
                    <p className="text-slate-400 text-xs font-semibold mb-4 flex items-center gap-2">
                        <HiLightningBolt className="text-violet-400" />
                        {tutor.skills.join(" • ")}
                    </p>

                    <div className="mb-6">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Available Sessions</p>
                        <div className="grid grid-cols-2 gap-2">
                            {tutor.slots.map(slot => (
                                <button
                                    key={slot}
                                    disabled={isEnrolled}
                                    onClick={() => setSelectedSlot(slot)}
                                    className={`py-2 rounded-xl text-[11px] font-bold border transition-all duration-300 ${(enrollmentDetails?.slot === slot || selectedSlot === slot)
                                            ? 'bg-violet-600 border-violet-400 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]'
                                            : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-500'
                                        } ${isEnrolled && enrollmentDetails?.slot !== slot ? 'opacity-30' : ''}`}
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto pt-5 border-t border-slate-800 flex justify-between items-center">
                        <div className="flex items-center gap-1">
                            <HiCurrencyRupee className="text-cyan-400 text-xl" />
                            <span className="text-2xl font-black text-white">{tutor.price}</span>
                        </div>

                        <button
                            onClick={isEnrolled ? handleLeave : handleBookClick}
                            className={`px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${isEnrolled
                                    ? 'bg-rose-500/10 text-rose-500 border border-rose-500/20 hover:bg-rose-500 hover:text-white'
                                    : 'bg-white text-slate-900 hover:bg-violet-400 hover:text-white'
                                }`}
                        >
                            {isEnrolled ? 'Leave' : 'Enroll'}
                        </button>
                    </div>
                </div>
            </div>

            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleFinalPayment} // Now properly defined!
                tutor={tutor}
                selectedSlot={selectedSlot}
            />
        </>
    );
};

export default TutorCard;