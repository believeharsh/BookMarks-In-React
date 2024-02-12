import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa6";


const AddNote = ({HandleOpneNoteDetail}) => {


 

  return (
   
	
	 <div className="flex justify-center items-center" onClick={HandleOpneNoteDetail}>
      <div className="rounded-full p-3 bg-gray-400 hover:bg-gray-200 text-black  " >

        <FaPlus />
      </div>
    </div>

	
   
    
  );
};

export default AddNote;

