import React from "react";

const NoteMenu = ({ OpenMenu, handleDeleteNote, BM , Id ,   HandleOpneNoteDetail}) => {
  return (
    <div className={`w-[90px] h-[80px]  bg-black rounded-xl py-2 m-1 ${OpenMenu ? '' : ''}`}>
      <div className="flex flex-col justify-center items-center   text-white ">
      <div className='bg-transparent  py-1 hover:bg-gray-500 w-full text-center' onClick={ HandleOpneNoteDetail} >Edit Note</div>
      <div className='bg-transparent  py-1 hover:bg-gray-500 w-full text-center' onClick={() => handleDeleteNote(BM.id)} >Remove</div>
      </div>
    </div>

  );
};

export default NoteMenu;
