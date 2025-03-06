const DB_NAME = "myDatabase";
const STORE_NAME = "doctors";

/**
 * Opens IndexedDB and returns the database instance.
 */
const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

/**
 * Saves data to IndexedDB
 */
export const saveToIndexedDB = async (data) => {
    try {
      const db = await openDB();
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
  
      store.clear(); // Clear old data before saving new
  
      const formattedData = Array.isArray(data) ? data : Object.values(data);
  
      formattedData.forEach((item, index) => {
        // Ensure each item has a unique key (ID)
        if (!item.id) {
          item.id = index + 1; // Assign a unique ID if missing
        }
        store.put(item); // Save to IndexedDB
      });
  
      return tx.complete;
    } catch (error) {
      console.error("Error saving to IndexedDB:", error);
    }
  };

/**
 * Retrieves data from IndexedDB
 */
export const getFromIndexedDB = async () => {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    return store.getAll();
  } catch (error) {
    console.error("Error retrieving from IndexedDB:", error);
    return [];
  }
};