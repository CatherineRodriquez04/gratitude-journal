"use client";
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper for swipeable functionality
import 'swiper/css';
import { firestore, auth } from '../firebaseConfig'; // Adjust path as needed
import { collection, query, where, onSnapshot } from 'firebase/firestore';

const colors = ['#FFD6BA','#FAA0A0','#f4e8fc', '#9dc9ec','#FFF7AE','#d7f9eb']; // Define your color palette

export default function EntryViewer() {
    const [entries, setEntries] = useState([]);

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

    const handleEdit = (index) => {
        // Implement edit functionality
        console.log('Edit entry at index:', index);
    };

    return (
        <div className="font-primary w-full h-[60vh] flex items-center justify-center px-[40px]">
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
                            className="relative w-[400px] h-[300px] flex flex-col justify-between p-4 rounded-lg shadow-lg"
                            style={{ backgroundColor: colors[index % colors.length], opacity: 0.9 }}
                        >
                            <div>
                                <h3 className="text-xl font-bold">{entry.date}</h3>
                                <p className='text-[25px] mt-5'>{entry.text}</p>
                            </div>
                            <div className="absolute bottom-2 right-2 flex space-x-2">
                                <button 
                                    className=" text-black border-black border-1 text-[20px] px-3 py-0.5 rounded hover:scale-110 transition-transform"
                                    onClick={() => handleEdit(index)}>
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