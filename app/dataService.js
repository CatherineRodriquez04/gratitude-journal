import { firestore } from './firebaseConfig';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

export async function saveEntry(userId, entryText) {
    try {
        await addDoc(collection(firestore, 'entries'), {
            userId,
            text: entryText,
            timestamp: new Date(),
        });
        console.log('Entry saved successfully');
    } catch (e) {
        console.error('Error adding document:', e);
    }
}

export async function getEntries(userId) {
    const q = query(collection(firestore, 'entries'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    let entries = [];
    querySnapshot.forEach((doc) => {
        entries.push(doc.data());
    });
    return entries;
}