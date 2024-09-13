import React, { useState, useEffect } from "react";

const EditBookmark = ({ BM, handleEditSubmit, handleDeleteBM, closeEditPanel, category }) => {
  const [editedText, setEditedText] = useState(BM.text);
  const [editedUrl, setEditedUrl] = useState(BM.url);

  useEffect(() => {
    setEditedText(BM.text);
    setEditedUrl(BM.url);
  }, [BM]);

  const handleTextChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleUrlChange = (e) => {
    setEditedUrl(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (editedText.trim() === "" || editedUrl.trim() === "") {
      alert("Both text and URL cannot be empty");
      return;
    }
    handleEditSubmit(BM.id, editedText, editedUrl, category);
    closeEditPanel(); // Close the edit panel after submitting
  };

  return (
    <div className="p-4  text-white bg-transparent w-full">
      <form onSubmit={onSubmit}>
        <div className="mb-2">
          <label className="block text-sm font-bold mb-1">Text:</label>
          <input
            type="text"
            value={editedText}
            onChange={handleTextChange}
            className="w-full px-2 py-1 border rounded bg-gray-700"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-bold mb-1">URL:</label>
          <input
            type="text"
            value={editedUrl}
            onChange={handleUrlChange}
            className="w-full px-2 py-1 border rounded bg-gray-700"
          />
        </div>
        <div className="flex justify-end gap-1">
          <button
            type="submit"
            className=" text-white px-4 py-2  hover:border-[0.4px] rounded-xl hover:border-gray-400 "
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => handleDeleteBM(BM.id, category)}
            className=" text-white px-4 py-2  hover:border-[0.4px] rounded-xl hover:border-gray-400 "
          >
            Delete
          </button>
          <button
            type="button"
            onClick={closeEditPanel}
            className=" text-white px-4 py-2  hover:border-[0.4px] rounded-xl hover:border-gray-400 "
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBookmark;