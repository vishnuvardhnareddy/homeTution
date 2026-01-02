import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TUTORS_DATA } from '../../util/dummyData';
import TutorCard from '../Cards/TutorCard';
import { HiSearch, HiSparkles } from 'react-icons/hi';

const GetAllTutors = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const { user } = useSelector(state => state.auth);

    // Filter Logic: Matches search query against Tutor Name or Skills
    const filteredTutors = TUTORS_DATA.filter(tutor => {
        const query = searchQuery.toLowerCase();
        return (
            tutor.name.toLowerCase().includes(query) ||
            tutor.skills.some(skill => skill.toLowerCase().includes(query))
        );
    });

    const isEnrolled = (tutorId) =>
        user?.enrolledTutors?.some(item => item.tutorId === tutorId);

    return (
        <div className="space-y-16 pb-20">
            {/* Hero Section */}
            <section className="text-center py-12 relative overflow-hidden">
                {/* Decorative background blur */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-violet-600/5 blur-[120px] -z-10" />

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-violet-400 text-xs font-bold mb-6 animate-pulse">
                    <HiSparkles />
                    <span className="uppercase tracking-widest">Next Generation Learning</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-[1.1]">
                    Master any skill with <br />
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-white to-cyan-400">
                        Expert Home Tuition.
                    </span>
                </h1>

                <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium mb-10">
                    Connect with elite tutors for personalized, high-performance learning.
                    Search by subject or tutor name to begin.
                </p>

                {/* Search Bar */}
                <div className="max-w-xl mx-auto relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-3xl blur opacity-20 group-focus-within:opacity-40 transition duration-500"></div>
                    <div className="relative">
                        <HiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 text-2xl" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Try 'React' or 'Mathematics'..."
                            className="w-full bg-slate-950/80 backdrop-blur-md border border-slate-800 py-6 pl-16 pr-8 rounded-3xl text-white font-medium outline-none focus:border-violet-500/50 transition-all shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* Results Header */}
            <div className="flex items-center justify-between border-b border-slate-800/50 pb-6">
                <h2 className="text-2xl font-black text-white tracking-tight">
                    {searchQuery ? `Search Results (${filteredTutors.length})` : 'Available Elite Tutors'}
                </h2>
                <div className="text-sm text-slate-500">
                    Showing {filteredTutors.length} instructors
                </div>
            </div>

            {/* Tutors Grid */}
            {filteredTutors.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTutors.map(tutor => (
                        <TutorCard
                            key={tutor.id}
                            tutor={tutor}
                            isEnrolled={isEnrolled(tutor.id)}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-24 bg-slate-900/20 rounded-[3rem] border border-dashed border-slate-800">
                    <p className="text-slate-500 font-bold italic">No tutors found matching "{searchQuery}"</p>
                    <button
                        onClick={() => setSearchQuery("")}
                        className="mt-4 text-violet-400 font-black text-sm uppercase tracking-widest hover:text-white transition"
                    >
                        Clear Search
                    </button>
                </div>
            )}
        </div>
    );
};

export default GetAllTutors;