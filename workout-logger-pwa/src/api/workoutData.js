import { db } from './firebase';
import { collection, getDocs, addDoc, Timestamp } from "firebase/firestore";

// Get all workouts (template data)
export const getWorkoutData = async () => {
  const colRef = collection(db, "workouts");
  const snapshot = await getDocs(colRef);
  // You can structure your data as needed
  return snapshot.docs.map(doc => doc.data());
};

// Save workout performance
export const saveWorkoutData = async (data) => {
  // Add a timestamp field for logging
  await addDoc(collection(db, "activityLog"), {
    ...data,
    timestamp: Timestamp.now()
  });
  return { success: true, message: "Registro guardado exitosamente." };
};

// Get activity log
export const getLogData = async () => {
  const colRef = collection(db, "activityLog");
  const snapshot = await getDocs(colRef);
  return snapshot.docs.map(doc => doc.data());
};