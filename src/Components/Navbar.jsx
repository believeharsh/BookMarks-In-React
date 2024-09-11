import React from 'react'

function Navbar() {
  return (
   <>
    <div className="px-8 py-1 font-libre text-white ">
        <div className="flex justify-between item-center text-xl">
            <div className="text-2xl bg-purple-700 px-3 py-1 rounded-xl">
                <p>BookMarks.In</p>
            </div>
            <div className="flex justify-center items-center space-x-5 text-xl ">
                <p className='hover:border-b-[2px] cursor-pointer  border-white'>Social</p>
                <p className='hover:border-b-[2px] cursor-pointer  border-white'>Coding</p>
                <p className='hover:border-b-[2px] cursor-pointer border-white'>Tools</p>
            </div>
        </div>
    </div>
   </>
  )
}

export default Navbar