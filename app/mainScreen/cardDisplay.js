import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper for swipeable functionality
import 'swiper/css';
import { firestore, auth } from '../firebaseConfig'; // Adjust path as needed
import { collection, query, where, onSnapshot, doc, updateDoc } from 'firebase/firestore';

const colors = ['#FFD6BA', '#FAA0A0', '#f4e8fc', '#9dc9ec', '#FFF7AE', '#d7f9eb']; // Define your color palette

export default function EntryViewer() {
    const [entries, setEntries] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editEntry, setEditEntry] = useState(null);
    const [editText, setEditText] = useState('');

    useEffect(() => {
        // Get the current user
        const user = auth.currentUser;

        if (user) {
            // Create a query for the entries collection filtered by the current user
            const q = query(collection(firestore, 'entries'), where('userId', '==', user.uid));

            // Listen to real-time updates
            const unsubscribe = onSnapshot(q, (snapshot) => {
                const newEntries = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setEntries(newEntries);
            });

            // Cleanup subscription on unmount
            return () => unsubscribe();
        } else {
            console.error('No user is logged in.');
        }
    }, []);

    const handleEdit = (entry) => {
        setEditEntry(entry);
        setEditText(entry.text);
        setIsEditing(true);
    };

    const handleSave = async () => {
        if (editEntry && editText) {
            try {
                // Update the entry in Firestore
                const entryRef = doc(firestore, 'entries', editEntry.id);
                await updateDoc(entryRef, { text: editText });
                setIsEditing(false);
                setEditEntry(null);
                setEditText('');
            } catch (error) {
                console.error('Error updating document:', error);
            }
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditEntry(null);
        setEditText('');
    };

    return (
        <div className="font-primary w-full h-full flex flex-col items-center justify-center px-[40px] overflow-x-hidden">
            {isEditing && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2">
                        <h2 className="text-[25px] font-bold mb-4">Edit Your Thoughts...</h2>
                        <textarea
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            rows="6"
                            className="border border-gray-300 p-2 text-[20px] w-full rounded"
                        />
                        <div className="mt-4 flex justify-end space-x-4">
                            <button
                                className="bg-[#8E62DB] text-white text-[20px] px-3 py-0.5 rounded hover:scale-110"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                            <button
                                className="bg-gray-300 text-black text-[20px] px-3 py-0.5 rounded hover:scale-110"
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Swiper
                spaceBetween={10} // Space between slides
                slidesPerView={1} // Default to 1 slide per view
                breakpoints={{
                    640: { // For small screens
                        slidesPerView: 1,
                    },
                    768: { // For medium screens
                        slidesPerView: 2,
                    },
                    1200: { // For large screens
                        slidesPerView: 3,
                    },
                }}
                style={{ width: '100%', height: '100%' }}
            >
                {entries.map((entry, index) => (
                    <SwiperSlide key={entry.id}>
                        <div
                            className="relative xl:w-[400px] xl:h-[300px] h-[300px] flex flex-col p-4 rounded-lg shadow-lg overflow-hidden"
                            style={{ backgroundColor: colors[index % colors.length], opacity: 0.9 }}
                        >
                            <div className="flex flex-col h-full overflow-hidden">
                                <h3 className="text-xl font-bold">{entry.date}</h3>
                                <div className="flex-grow overflow-hidden">
                                    <p className="text-[25px] mt-5 max-h-[175px] leading-[40px] overflow-y-auto overflow-x-hidden">
                                        {entry.text}
                                    </p>
                                </div>
                            </div>
                            <div className="absolute bottom-2 right-2 flex space-x-2">
                                <button
                                    className="text-black border-black border-1 text-[20px] px-3 py-0.5 rounded hover:scale-110 transition-transform"
                                    onClick={() => handleEdit(entry)}
                                >
                                    Edit Thoughts...
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}