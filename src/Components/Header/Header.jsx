import React from 'react'

function Header() {
  return (
   <>
    <div className="px-8 py-1 border-b-black border-[1px]">
        <div className="flex justify-between item-center">
            <div className="text-xl">
                <p>BookMarks.In</p>
            </div>
            <div className="flex justify-center items-center space-x-5 text-xl ">
                <p>Social</p>
                <p>Coding</p>
                <p>Tools</p>
            </div>
        </div>
    </div>
   </>
  )
}

export default Header
