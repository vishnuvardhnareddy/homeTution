import { useSelector } from 'react-redux'; // <--- THIS WAS MISSING
import { TUTORS_DATA } from '../../util/dummyData';
import TutorCard from '../Cards/TutorCard';

const MyTutors = () => {
    const { user } = useSelector(state => state.auth);

    // Logic to filter tutors that the user has actually joined
    const myEnrolledTutors = TUTORS_DATA.filter(t =>
        user?.enrolledTutors?.some(item => item.tutorId === t.id)
    );

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8">My Scheduled Tutions</h1>

            {myEnrolledTutors.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {myEnrolledTutors.map(tutor => (
                        <TutorCard key={tutor.id} tutor={tutor} isEnrolled={true} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                    <p className="text-gray-500">You haven't booked any slots yet.</p>
                </div>
            )}
        </div>
    );
};

export default MyTutors;