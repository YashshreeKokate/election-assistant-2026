import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

/**
 * Fetches all voter verticals from Firestore.
 * Collection name: "verticals"
 */
export const fetchVerticals = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "verticals"));
    const verticals = {};
    
    querySnapshot.forEach((doc) => {
      // Use document ID as the key (e.g., "first-time", "nri")
      verticals[doc.id] = doc.data();
    });
    
    return verticals;
  } catch (error) {
    console.error("Error fetching verticals from Firestore:", error);
    throw error;
  }
};
