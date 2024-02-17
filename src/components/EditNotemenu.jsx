import React from 'react'

const EditNotemenu = () => {
  return (
    <>
        <div className="w-[100px] h-[70px] hidden">
            <div className="flex flex-col justify-center items-center px-3 py-2 bg-black border-white border-[1px]">
                <div className="text-white ">
                    <p>Edit Note </p>
                </div>
                <div className="text-white">
                    <p>Delete Note </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default EditNotemenu
