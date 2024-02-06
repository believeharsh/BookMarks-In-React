import React from 'react'

const NoteMenu = ({
  OpenMenu , handleOpenMenu , handleCloseMenu
}) =>  {
  return (
    <div className={`w-[100px] h-[60px]  bg-black rounded-xl py-2 m-1 ${OpenMenu ? 'visible' : 'hidden'}`}>
      <div className="flex flex-col justify-center items-center   text-white ">
      <div className='bg-transparent  py-1 hover:bg-gray-500 w-full text-center '>Edit Note</div>
      <div className='bg-transparent  py-1 hover:bg-gray-500 w-full text-center'>Remove</div>
      </div>
    </div>
  )
}

export default NoteMenu
