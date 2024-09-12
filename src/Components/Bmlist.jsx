import React, { useState, useRef, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useBM } from "../BookMark-Context/BMContext-Provider";
import CommonBM from "./CommonBM";
import EditBookmark from "./EditBM";
import EditingPannel from "./EditingPannel";

const Bmlist = ({bookmarks, category}) => {
  const [editBM, setEditBM] = useState(null); // Track the bookmark being edited
  const [panelOpenId, setPanelOpenId] = useState(null);
  const { handleEditBM, handleDeleteBM, BookMark } = useBM();
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  const togglePanel = (BmId) => {
    setPanelOpenId(panelOpenId === BmId ? null : BmId);
  };

  const openEditPanel = (BmId) => {
    const BMToEdit = BookMark[category].find((BM) => BM.id === BmId);
    setEditBM(BMToEdit);
    setPanelOpenId(null); // Close the panel when opening the edit form
  };

  
  const handleClickOutside = (e) => {
    if (
      panelRef.current &&
      !panelRef.current.contains(e.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target)
    ) {
      setPanelOpenId(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-wrap gap-4 m-2 mt-5 relative">
      {bookmarks.map((BM) => {
        const isEditing = BM.id === editBM?.id;
        const isPanelOpen = panelOpenId === BM.id;

        return (
          <div
            key={BM.id}
            className={`${
              !isEditing
                ? "hover:border-[0.2px] hover:border-gray-100 rounded-xl"
                : ""
            }  group relative`}
          >
            <div className=" flex items-center  py-2 hover:rounded-xl justify-center px-4 ">
              {isEditing ? (
                <EditBookmark
                  BM={editBM}
                  handleEditSubmit={handleEditBM}
                  handleDeleteBM={handleDeleteBM}
                  closeEditPanel={setEditBM}
                  category={category}
                />
              ) : (
                <>
                  <div className="flex justify-center items-center">
                    <CommonBM BM={BM} />
                  </div>

                  <button
                    className="absolute top-0 right-0 text-gray-500 hover:text-gray-700 focus:outline-none px-1 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    onClick={() => togglePanel(BM.id)}
                    ref={buttonRef}
                  >
                    <BsThreeDotsVertical />
                  </button>
                </>
              )}
            </div>

            <div className="">
              {isPanelOpen && (
                // Editing pannel for BookMarks
                <>
                  <EditingPannel
                    BM={BM}
                    panelRef={panelRef}
                    openEditPanel={openEditPanel}
                    handleDeleteBM={handleDeleteBM}
                    handleClickOutside={handleClickOutside}
                    category={category}
                    
                    
                  />
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Bmlist;