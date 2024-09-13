export const addNewBM = (BookMark , newBM, category) => {

  const newBookMark = {
    id: newBM.id,
    text: newBM.text,
    url: newBM.url,
  };
  const updatedCategory = [...BookMark[category], newBookMark];
  return {
    ...BookMark, // Keep other categories unchanged
    [category]: updatedCategory, // Update the target category
  };
};

  
export const deleteBM = (BookMark, BMId, category) => {
  // Checking if the category exists in BookMark or not??
  if (!BookMark[category]) {
    console.error(`Category ${category} does not exist in BookMark.`);
    return BookMark; // Return unchanged BookMark or handle as needed
  }

  // Return the updated BookMark object with the filtered category
  return {
    ...BookMark,
    [category]: BookMark[category].filter((task) => task.id !== BMId)
  };
};
  
  export const editBM = (BookMark, BMId, newBM, category) => {
   
    if (!BookMark[category]) {
      console.error(`Category ${category} does not exist in BookMark.`);
      return BookMark; 
    }
  
    
    return {
      ...BookMark,
      [category]: BookMark[category].map((BM) =>
        BM.id === BMId ? { ...BM, id: newBM.id, text: newBM.text, url: newBM.url } : BM
      )
    };
  };
