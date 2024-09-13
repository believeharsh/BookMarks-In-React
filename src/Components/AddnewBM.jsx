import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { useBM } from "../BookMark-Context/BMContext-Provider";
import { v4 as uuidv4 } from "uuid";

const AddnewBM = ({ category }) => {
  const { handleAddBM, BookMark } = useBM();
  const [bookmarkText, setBookmarkText] = useState("");
  const [bookmarkUrl, setBookmarkUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for handling errors

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission default behavior

    // Validate both fields
    if (bookmarkText.trim() === "" || bookmarkUrl.trim() === "") {
      setErrorMessage("Input fields cannot be empty"); // Set the error message
    } else {
      // Clear any previous error messages
      setErrorMessage("");

      // Handle bookmark addition logic
      handleAddBM(
        BookMark,
        {
          id: uuidv4(),
          text: bookmarkText,
          url: bookmarkUrl,
        },
        category
      );

      // Reset input fields after submission
      setBookmarkText("");
      setBookmarkUrl("");
    }
  };

  // Automatically hide error message after 3 seconds
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(""); // Clear the error message after 3 seconds
      }, 1500);

      return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
    }
  }, [errorMessage]); // Run this effect only when errorMessage changes

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center space-x-4 mx-auto max-w-3xl pl-3"
      >
        {/* First Child: Input Fields */}
        <div className="flex-1 flex space-x-2" style={{ width: "90%" }}>
          {/* Bookmark Text (25% width) */}
          <div className="w-1/4">
            <input
              type="text"
              value={bookmarkText}
              onChange={(e) => setBookmarkText(e.target.value)}
              placeholder="Name"
              className="NewBMInput"
            />
          </div>

          {/* Bookmark URL (75% width) */}
          <div className="flex-1">
            <input
              type="url"
              value={bookmarkUrl}
              onChange={(e) => setBookmarkUrl(e.target.value)}
              placeholder="URL"
              className="NewBMInput"
            />
          </div>
        </div>

        {/* Second Child: Add Button (10% width) */}
        <div className="flex-shrink-0" style={{ width: "10%" }}>
        
          <button
            type="submit"
            className="Addnew-BM-btn"
          >
            <FaPlus />
          </button>
        </div>
      </form>

      {/* Error message display */}
      {errorMessage && <p style={{ color: "white ", paddingLeft : "15px" }}>{errorMessage}</p>}
    </>
  );
};

export default AddnewBM;
