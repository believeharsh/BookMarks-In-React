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
    return BookMark.filter((task) => task.id !== BMId);
  };
  
  export const editBM = (BookMark, BMId, newBM, category) => {
    return BookMark.map((BM) =>
      BM.id === BMId ? { ...BM, id:newBM.id , text: newBM.text, url : newBM.url, } : BM
    );
  };
