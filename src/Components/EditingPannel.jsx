import React from "react";
import { useEffect } from "react";
const EditingPannel = ({
  panelRef,
  openEditPanel,
  handleDeleteBM,
  BM,
  handleClickOutside,
  category
}) => {
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div
        ref={panelRef}
        className="absolute top-2 mx-auto ml-1 mt-1 w-20 bg-gray-800 text-white rounded-md shadow-lg py-3 z-20"
      >
        <button
          className="EditingPanelBTn "
          onClick={() => openEditPanel(BM.id, category)}
        >
          Edit
        </button>
        <button
          className="EditingPanelBTn "
          onClick={() => handleDeleteBM(BM.id, category)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default EditingPannel;
