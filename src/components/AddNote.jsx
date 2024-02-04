import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
   
	
	 <div className="flex justify-center items-center">
      <div className="rounded-full p-3 bg-gray-400 hover:bg-gray-200 text-black ">

        <FaPlus />
      </div>
    </div>

	
   
    
  );
};

export default AddNote;
