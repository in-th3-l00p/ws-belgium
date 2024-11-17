import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyByzQMGNXDiyP8yDnaGN-tEsvewCrm2Z3I',
  authDomain: 'ws-belgium.firebaseapp.com',
  projectId: 'ws-belgium',
  storageBucket: 'ws-belgium.firebasestorage.app',
  messagingSenderId: '287882612967',
  appId: '1:287882612967:web:e0d46837013852487bd242',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Helper function to ensure session exists
export async function ensureSession(
  competitorId: string,
  day: number,
  module: 'morning' | 'evening'
) {
  const sessionsRef = collection(db, 'sessions');
  await addDoc(sessionsRef, {
    competitorId,
    day,
    module,
    startTime: null,
    endTime: null,
    totalTime: 0,
  });
}
