import React from "react";

const AddNoteDetails = ({
  SaveNote,
  HandleCloseNoteDetail

}) =>  {
  return (
    <>
      <div
        className={`w-full max-w-xl z-[15] ${
          SaveNote ? "visible" : "hidden"
        } fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] `}
      >
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Github"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Url
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="https://Github.com"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Save
            </button>
            <button onClick={HandleCloseNoteDetail}
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              
            >
              Cancle
            </button>
          </div>
        </div>
       
      </div>
    </>
  );
}

export default AddNoteDetails;
